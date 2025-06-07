from rest_framework.decorators import api_view
from .serializers import  ProcessarSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(['POST'])
def processar(request):
    serializer = ProcessarSerializer(data=request.data)
    if serializer.is_valid():
        # Valid data, proceed with creating the item
        return Response({'message': 'Item created successfully.'})
    else:
        return Response(serializer.errors, status=400)


@api_view(['GET'])
def status(request, id):
    return Response({"id": id, "status": "Processando", "media": 0, "mediana": 0})