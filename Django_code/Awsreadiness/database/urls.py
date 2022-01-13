from django.urls import path
from . import views

urlpatterns = [
    path("enquiry", views.database_enquiry, name="databaseEnquiry"),  
]