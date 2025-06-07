from django.urls import path
from .views import processar, status

urlpatterns = [
    path('processar', processar, name='processar'),
    path('status/<int:id>', status, name='status'),
] 