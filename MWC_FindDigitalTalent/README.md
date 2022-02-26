# Find Digital Talent

_Aplicación de registro para participar en el evento de Hackathon presencial Mobile World Capital en Barcelona_

_La aplicación permite registrarse y formar parte del grupo de personas que se presentan al Hackathon mediante el uso de nuestra aplicación, además puedes hacer al perfil del usuario registrado y si formas parte del departamento de Digital Talent Barcelona puedes enviarle directamente un correo_

## ¿Como desplegar el proyecto? 📋

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo:

PARTE DEL BACK-END DE LA APLICACIÓN

Clonarte el repositorio localmente:
> git clone url del repositorio

Instalar las depedencias necesarias dentro de la carpeta del Back:
> npm i

Rellenar las variables necesarias en estos archivos para iniciar el proyecto:

> - .env.example:
>   -  Puerto en el que quieras que se ejecute el server
>   -  Cadena de conexión con la base de datos en Mongo Atlas, MONGODB_ATLAS
>   -  Usuario y contraseña del servidor de correo utilizado en Nodemailer para el envio de correos

Correr el siguiente parametro para modo desarrollo:
> npm run dev

😊 Genial ya tenemos todo listo para poder llamar a los endpoints, ya podemos recibir y modificar datos 😊

PARTE DEL FRONT-END DE LA APLICACIÓN

Instalar las depedencias necesarias dentro de la carpeta del Back:
> npm i

Correr el siguiente parametro para modo desarrollo:
> npm start

😊 Genial ya podemos toquitear el front y probar nuestra aplicación en desarrollo 😊

## Endpoints🛠️

El sistema ataca a al modelo User del que disponemos en la base de datos (Mongo DB):

- Endpoint crear a un usuario
- Endpoint donde nos traemos a todos los usuarios
- Endpoint que permite a través de un servidor de correos enviar un correo a un usuario específico

## Despliegue de nuestra aplicación

Nuestro back-end se encuentra desplegado en Heroku en el siguiente enlace:

https://mwc-finddigitaltalent.herokuapp.com/

Nuestra aplicación se encuentra desplegada en Heroku en este enlace:

https://frontreactmwc.herokuapp.com/

(Si tarda, esperar unos segundos que Heroku despierte)

## Un breve demo de nuestra app en funcionamiento

El siguiente enlace se puede ver el funcionamiento de nuestra aplicación:

https://drive.google.com/file/d/1SYPuZ3F4B20HaW-gNhKWWTtY0Kljt-ns/view?usp=sharing

## Tecnologías utilizadas 🚀

El proyecto ha sido desarrollado utilizando las siguientes paquetes en Nodejs:

* Expresss
* Nodemon
* Bcryptjs
* Nodemailer
* Mongoose
* React
* React-router-dom
* Bootstrap
  
## 📌 Futuras implementaciones y agradecimientos 📌

Se que me han quedado cosas muy importantes por cubrir, como la validación del formulario o un diseño responsive, pero pese a esto, estoy contento con el resultado de haber sacado algo que funcione en 2 días y además siendo mi primer proyecto propio hecho con React. Con más tiempo implementare estas cosas para que quede algo aun mejor para el futuro.

Dar las gracias a la organización por eventos y retos como este, mucha gente junior o pre-junior nos motiva hacer este tipo de proyectos y sin sacar un producto muy acabado he aprendido de un montón de fallos y cosas que mejorar.

---
Hecho por [Germán Fernández](https://github.com/GeerDev) 😊 
