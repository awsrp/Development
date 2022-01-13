from django.urls import path
from . import views

urlpatterns = [
    path("signup", views.signup, name="signup"),
    path("loginValidation", views.login_validation, name="login"),
]