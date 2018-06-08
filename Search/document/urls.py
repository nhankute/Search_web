from django.urls import path

from . import views
from .views import *

urlpatterns = [
    path('<int:pk>/', index),
    path('', document, name='document'),
]