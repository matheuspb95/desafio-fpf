from rest_framework import serializers
from .models import Processamento


class ProcessarSerializer(serializers.Serializer):
    num1 = serializers.IntegerField()
    num2 = serializers.IntegerField()
    num3 = serializers.IntegerField()

    def create(self, validated_data):
        return Processamento.objects.create(**validated_data)