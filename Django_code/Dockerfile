#For Django
FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY ./Awsreadiness /app
EXPOSE 8000

RUN ls -lt /app
RUN ls -la /app
#Run below command to create a new project and new manage.py file
#RUN django-admin startproject Awsreadiness_rp /app/

CMD [ "python", "/app/manage.py", "runserver", "0.0.0.0:8000" ]
