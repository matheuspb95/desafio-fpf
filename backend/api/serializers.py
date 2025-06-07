from rest_framework import serializers


class ProcessarSerializer(serializers.Serializer):
    num1 = serializers.IntegerField()
    num2 = serializers.IntegerField()
    num3 = serializers.IntegerField()