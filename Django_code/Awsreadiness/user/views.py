from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.contrib.auth.models import auth
from rest_framework.decorators import api_view
from user.serializers import DirectorySerializer
from .models import Directory
from django.forms.models import model_to_dict
import bcrypt

# Create your views here.
@csrf_exempt
@api_view(['POST', ])
def signup(request):
    if request.method == 'POST':
        print("###INSIDE POST SIGNUP######")
        data_received = request.data
        user_Pwd = bytes(data_received['password'], 'utf-8')
        hashed = bcrypt.hashpw(user_Pwd, bcrypt.gensalt())

        user_data = {
            'EmpId' : data_received['empid'],
            'FirstName' : data_received['fname'].title(),
            'LastName' : data_received['lname'].title(),
            # 'DOB' : data_received['DOB'],
            'Team' : data_received['team'],
            'Username' : data_received['username'],
            'Password' : hashed.decode('utf-8'),
            'Email' : data_received['emailid']
        }
        user_serializer = DirectorySerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("{Added Successfully}", safe=False)
        return JsonResponse("Failed to Add.", safe=False)

@api_view(['POST', ])
def login_validation(request):
    print(request)
    if request.method == 'POST':
        username = request.data["username"]
        user_password = request.data['password'].encode('utf-8')
        try:
            user = Directory.objects.get(Username=username)
        except Directory.DoesNotExist:
            return JsonResponse("Username doesn't exists.", safe=False)
        else:
            user_dict = model_to_dict(user)
            password = bytes(user_dict['Password'], 'utf-8')
            if bcrypt.checkpw(user_password, password):
                return JsonResponse("Valid Credentials", safe=False)
            else:
                return JsonResponse("Invalid Password", safe=False)
            
            
            # emp = 'EmpId'
            # print(Directory.objects.get(Username=username).FirstName)
        # print(user[0]['EmpId'])
        # print(user.)
        # print(user.get['EmpId'=username])
    


