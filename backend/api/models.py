from django.db import models

# Create your models here.
class Processamento(models.Model):
    num1 = models.IntegerField()
    num2 = models.IntegerField()
    num3 = models.IntegerField()
    status = models.CharField(choices=(
        ('1', 'Processando'),
        ('2', 'Concluído'),
    ))
    media = models.FloatField()
    mediana = models.FloatField()

