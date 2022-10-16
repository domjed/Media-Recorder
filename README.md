# Media Recorder

## General Info 

This web application allows user to record a sound and save it in a database so that
every recording can be listened once again and downloaded.
The app consist of main menu with short introduction into the app. To record new
voice tab called "New Audio" needs to be visited. Historical entries are listed
in "Old Recordings". Make sure you have enabled a microphone access to your browser.

## Prerequisites

This project requires NodeJS (version 8 or later), Pip and Yarn.
[Node](http://nodejs.org/), [Pip](https://pypi.org/project/pip/) and [Yarn](https://yarnpkg.com/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v
8.3.0
$ yarn -v 
1.22.18
$ pip -V
pip 22.2.2
```

## Table of contents 🤷‍♀️
* [General Info](#general-info)
* [Prerequisites](#prerequisites)
* [Technologies](#technologies)
* [Backend Setup](#backend-setup)
* [Frontend Setup](#frontend-setup)

## Technologies
This project is created with:
* Django
* JS/React
* HTML5/CSS3
* Bootstrap

## Backend Setup

The first thing to do is to clone the repository from GitHub:

```sh
$ git clone https://github.com/domjed/Media-Recorder.git
$ cd backend
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ python -m venv AppDjangoEnv
$ source AppDjangoEnv/Scripts/activate
```

Then install the dependencies:

```sh
(AppDjangoEnv)$ pip install -r requirements.txt
```
Note the `(AppDjangoEnv)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `venv`.

Once `pip` has finished downloading the dependencies, create a `.env` file at the root 
directory of your backend application and add the variables to it.

```sh
(AppDjangoEnv)$ cd django_main/django_main
(AppDjangoEnv)$ cd . > .env
```
Update .env file using your own credentials. Example of necessary variables to run 
the application is provided in `.env.example` which can be found in the same directory

Go back to main django project directory and run server:
```sh
(AppDjangoEnv)$ cd ..
(AppDjangoEnv)$ python manage.py runserver
```

## Frontend Setup

Once the repsitory has been cloned previously, go to main frontend directory:

```sh
$ cd frontend
```

Install yarn if needed

```sh
$ npm install --global yarn
```

Install all dependencies using yarn:

```sh
$ yarn install
```

Once `yarn` has finished installing the dependencies, create a .env file at the root 
directory of your frontend application.

```sh
$ cd . > .env
```
Update `.env` file using your own credentials. Example of necessary variables to run 
the application is provided in `.env.example` which can be found in the same directory

Start the project:

```sh
$ yarn start
```
