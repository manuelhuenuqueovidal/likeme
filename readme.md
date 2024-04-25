# Like Me 

Like Me es una aplicación web simple que te permite crear posts con imágenes y descripciones, y también dar "me gusta" a los posts de otros usuarios.

## Funcionalidades

- Crear un nuevo post proporcionando un nombre de usuario, una URL de imagen y una descripción.
- Ver todos los posts creados por los usuarios.
- Dar "me gusta" a los posts de otros usuarios.

## Tecnologías utilizadas

- **Frontend:** HTML, CSS (Bootstrap), JavaScript (jQuery)
- **Backend:** Node.js, Express.js
- **Base de datos:** PostgreSQL
- **Librerías:** Axios (para realizar solicitudes HTTP desde el frontend)

## Instalación

1. Instala las dependencias del proyecto:

npm install.

2. Configura la base de datos PostgreSQL en tu entorno local. Asegúrate de tener PostgreSQL instalado y configurado correctamente.

3. Crea una base de datos llamada `likeme` y asegúrate de tener las credenciales de acceso adecuadas configuradas en tu archivo `consultas.js`.

4. Inicia el servidor:

node index.js.

5. Abre tu navegador web y navega a `http://localhost:3000` para utilizar la aplicación.

## Estructura del proyecto

- **index.js:** Este archivo contiene el código principal del servidor Express.
- **consultas.js:** Aquí se definen las consultas y operaciones relacionadas con la base de datos PostgreSQL.
- **index.html:** Archivo HTML que define la estructura y el contenido de la interfaz de usuario.
- **styles.css:** Archivo CSS con estilos adicionales para mejorar la apariencia de la aplicación.
- **scripts.js:** Contiene el código JavaScript que maneja la interactividad de la aplicación, como el envío de formularios y la actualización de la interfaz de usuario.







