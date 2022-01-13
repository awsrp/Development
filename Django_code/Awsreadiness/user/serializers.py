from rest_framework import serializers
from user.models import Directory


class DirectorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Directory
        # fields = ('EmpId', 'FirstName', 'LastName', 'DOB', 'Team', 'Username', 'Password', 'Email')
        fields = ('EmpId', 'FirstName', 'LastName', 'Team', 'Username', 'Password', 'Email')


        