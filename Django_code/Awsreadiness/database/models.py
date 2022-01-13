from django.db import models


# Create your models here.
class Database(models.Model):
    DB_Type = models.CharField(max_length=50)
    Application = models.CharField(max_length=200, blank=True)
    AWS_Services = models.CharField(max_length=100)
    
class AwsInstance(models.Model):
    Cpu = models.IntegerField()
    Memory_GB = models.IntegerField()
    AWS_Instance = models.CharField(max_length=100)