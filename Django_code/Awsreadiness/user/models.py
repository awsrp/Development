from django.db import models
from django.core.validators import EmailValidator
from django.utils.deconstruct import deconstructible


# Create your models here.

@deconstructible
class WhitelistEmailValidator(EmailValidator):

    def validate_domain_part(self, domain_part):
        return False

    def __eq__(self, other):
        return isinstance(other, WhitelistEmailValidator) and super().__eq__(other)

class Directory(models.Model):
    EmpId = models.CharField(max_length=10, primary_key=True, unique=True)
    FirstName = models.CharField(max_length=50, blank=False)
    LastName = models.CharField(max_length=50, null=True)
    # DOB = models.DateField(auto_now=False, auto_now_add=False, blank=True)
    Team = models.CharField(max_length=30, editable=True, blank=True)
    Username = models.CharField(max_length=20, unique=True, blank=False)
    Password = models.TextField(max_length=254)
    Email = models.EmailField(max_length=60, validators=[WhitelistEmailValidator(whitelist=['tsys.com', 'globalpay.com'])], unique=True)
    Creation_Date = models.DateField(auto_now=False, auto_now_add=True)
    Last_Modified_Date = models.DateField(auto_now=True, auto_now_add=False)
