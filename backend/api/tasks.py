from random import randint
from statistics import mean, median
from time import sleep
from backend.celery import app

@app.task
def calcular_media_e_mediana(num1, num2, num3):
    media = mean([num1, num2, num3])
    mediana = median([num1, num2, num3])
    # Tempo de procesamento
    sleep(randint(3, 8))
    return {"media": media, "mediana": mediana}
