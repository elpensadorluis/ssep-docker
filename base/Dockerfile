FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.pip /code/
RUN pip install -r requirements.pip
ADD . /code/
#CMD python manage.py runserver 8001
#CMD ls
# create unprivileged user
# RUN adduser --disabled-password --gecos '' el_ss
