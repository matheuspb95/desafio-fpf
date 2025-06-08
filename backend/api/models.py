from django.db import models

# Create your models here.
class Processamento(models.Model):
    num1 = models.IntegerField()
    num2 = models.IntegerField()
    num3 = models.IntegerField()
    status = models.CharField(choices=(
        ('1', 'Processando'),
        ('2', 'Concluído'),
    ), default='Processando')
    media = models.FloatField(default=None, null=True)
    mediana = models.FloatField(default=None, null=True)

