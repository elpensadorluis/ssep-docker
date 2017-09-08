#!/bin/sh

# wait for PSQL server to start
sleep 10

cd base
# su -m el_ss -c "pip install -r requirements.pip"
# prepare init migration
su -m el_ss -c "python manage.py makemigrations"
# migrate db, so we have the latest db schema
su -m el_ss -c "python manage.py migrate"
# start development server on public ip interface, on port 8000
su -m el_ss -c "python manage.py runserver 8002"
