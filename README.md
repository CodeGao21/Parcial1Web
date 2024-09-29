Para correr el app:

* Descargar el release
* Abrirlo en un editor
* Correr npm install
* Correr npm start

Si no funciona:

* Ingresar los siguientes comandos en el terminal:
* rm -rf node_modules
* rm package-lock.json
* npm install
* npm start
* Con este último comando la aplicación ya debería correr

Reporte del Parcial

El parcial fue desarrollado utilizando React como framework principal, junto con Tailwind CSS para el diseño y Mockaroo para la simulación de datos. La aplicación incluye varios componentes personalizados y se integraron funcionalidades de internacionalización (i18n) para soportar múltiples idiomas (español e inglés).

Componentes Utilizados

Componentes de React:

* Home: Componente principal que contiene galerías de tarjetas.

* CardGallery1, CardGallery2, CardGallery3: Galerías de tarjetas que muestran datos dinámicos provenientes de Mockaroo.

* SportCard: Componente de tarjeta reutilizable para mostrar datos de ciclismo, carrera y natación.

* Bar: Barra de navegación fija en la parte inferior de la pantalla.

Hooks de React:

* useState: Utilizado para manejar el estado de los componentes, como el estado de apertura de los modales y el manejo de los datos obtenidos de la API.

* useEffect: Se empleó para realizar la llamada a la API de Mockaroo mediante fetch, lo que permitió consumir datos dinámicos para las galerías de tarjetas.

Diseño con Tailwind CSS:

Se decidió utilizar Tailwind CSS como framework de diseño por su simplicidad y la amplia cantidad de recursos en línea. Esto permitió una rápida búsqueda y adaptación de componentes a las necesidades específicas del parcial. Los estilos de los componentes fueron creados utilizando clases utilitarias de Tailwind, lo que facilitó la personalización y disposición de los elementos.

Simulación de Datos con Mockaroo:

Para simular datos realistas, se utilizó Mockaroo. Se configuraron mocks personalizados y los datos se obtuvieron desde una API usando el método fetch. Estos datos fueron integrados dinámicamente en las galerías de tarjetas y los modales.

Internacionalización (i18n):

La internacionalización se implementó utilizando i18next y react-i18next. Esto permitió que la aplicación soportara múltiples idiomas (español e inglés), facilitando el cambio de idioma a través de botones en la interfaz. Todos los textos visibles fueron traducidos y gestionados a través del archivo de configuración i18n.js.
