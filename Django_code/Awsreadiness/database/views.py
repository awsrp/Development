from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .models import Database, AwsInstance
from django.forms.models import model_to_dict
from django.http.response import JsonResponse
from django.core.exceptions import FieldError

# Create your views here.
@csrf_exempt
@api_view(['POST', ])
def database_enquiry(request):
    if request.method == 'POST':
        DB_choice = request.data['DB_Type']
        Application_required = request.data['application']
        Cpu = request.data['cpu']
        Memory_GB = request.data['memory']

        if Application_required.isspace() == True or Application_required == 'None':
            # for s in Database.objects.raw('''SELECT "AWS_Services", "id" FROM database_database ORDER BY "AWS_Services"'''):
            #     print("\n----------\n",model_to_dict(s)['AWS_Services'])
            try:
                if not Database.objects.filter(DB_Type= DB_choice):
                    return JsonResponse("DB_Type not found in database", safe=False)
                AWS_Service = [service['AWS_Services'] for service in Database.objects.filter(DB_Type=DB_choice).values('AWS_Services').distinct()]
            except Database.DoesNotExist:
                return JsonResponse("DB_Type not found in database", safe=False)
        else:
            try:
                AWS_Service = model_to_dict(Database.objects.get(DB_Type=DB_choice, Application=Application_required))['AWS_Services']
            except AwsInstance.DoesNotExist:
                return JsonResponse("Cpu and Memory combination is not available in the database", safe=False)
        
        try:
            AWS_inst = model_to_dict(AwsInstance.objects.get(Cpu=Cpu, Memory_GB=Memory_GB))['AWS_Instance']
        except AwsInstance.DoesNotExist:
            return JsonResponse("Cpu and Memory combination is not available in the database", safe=False)
        print(AWS_inst)

        return JsonResponse(f"AWS_Services : {AWS_Service}, AWS_Instance : {AWS_inst}", safe=False)

