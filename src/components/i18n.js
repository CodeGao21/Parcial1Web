import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Traducciones de Home.js
      "cycling": "Cycling",
      "running": "Running",
      "swimming": "Swimming",

      // Traducciones de CardGallery.js y SportCard.js
      "city": "City",
      "time": "Time",
      "longitude": "Longitude",
      "unknownCity": "Unknown City",
      "unknownTime": "Unknown Time",
      "unknownLongitude": "Unknown Longitude",

      // Traducciones de Bar.js
      "name": "Name",
      "cyclingtime": "Cycling Time",
      "runningtime": "Running Time",
      "swimmingtime": "Swimming Time",
      "loading": "Loading...",

      // Traducciones de Login.js
      "loginTitle": "Login",
      "emailLabel": "Email",
      "emailPlaceholder": "Enter your email",
      "passwordLabel": "Password",
      "passwordPlaceholder": "Enter your password",
      "loginButton": "Login",
      "emailError": "Email format is not valid",
      "passwordError": "Password must be at least 8 characters long"
    }
  },
  es: {
    translation: {
      // Traducciones de Home.js
      "cycling": "Ciclismo",
      "running": "Correr",
      "swimming": "Natación",

      // Traducciones de CardGallery.js y SportCard.js
      "city": "Ciudad",
      "time": "Hora",
      "longitude": "Longitud",
      "unknownCity": "Ciudad desconocida",
      "unknownTime": "Hora desconocida",
      "unknownLongitude": "Longitud desconocida",

      // Traducciones de Bar.js
      "name": "Nombre",
      "cyclingtime": "Tiempo de Ciclismo",
      "runningtime": "Tiempo de Carrera",
      "swimmingtime": "Tiempo de Natación",
      "loading": "Cargando...",

      // Traducciones de Login.js
      "loginTitle": "Iniciar sesión",
      "emailLabel": "Correo electrónico",
      "emailPlaceholder": "Ingrese su correo",
      "passwordLabel": "Contraseña",
      "passwordPlaceholder": "Ingrese su contraseña",
      "loginButton": "Iniciar sesión",
      "emailError": "El correo no tiene un formato válido",
      "passwordError": "La contraseña debe tener al menos 8 caracteres"
    }
  }
};

// Inicializar i18next
i18n
  .use(initReactI18next) // Hook de i18next para React
  .init({
    resources, // Recursos con las traducciones
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva si no se encuentra el texto en el idioma seleccionado
    interpolation: {
      escapeValue: false // React ya hace escaping de valores por defecto
    }
  });

export default i18n;
