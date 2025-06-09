import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_celery_results.models import TaskResult
from celery import states
from .models import Processamento
from .serializers import  ProcessarSerializer
from .tasks import calcular_media_e_mediana


# Create your views here.
@api_view(['POST'])
def processar(request):
    serializer = ProcessarSerializer(data=request.data)
    if serializer.is_valid():
        new_process = serializer.save()
        created_task = calcular_media_e_mediana.apply_async(task_id=str(new_process.id) ,args=[new_process.num1, new_process.num2, new_process.num3])
        return Response({"id": created_task.task_id, "status": "Processando"})
    else:
        return Response(serializer.errors, status=400)


@api_view(['GET'])
def status(request, id):
    try:
        task = TaskResult.objects.get(task_id=id)
        if task.status == states.SUCCESS:
            result = json.loads(task.result)
            proc_inst = Processamento.objects.get(id=id)
            proc_inst.media = result["media"]
            proc_inst.mediana = result["mediana"]
            proc_inst.status = "Concluído"
            proc_inst.save()
            return Response({"id": id, "status": "Concluído", "media": result["media"], "mediana": result["mediana"]})
        else:
            return Response({"id": id, "status": "Processando"})
    except TaskResult.DoesNotExist:
        return Response("task_id not found", status=404)
    