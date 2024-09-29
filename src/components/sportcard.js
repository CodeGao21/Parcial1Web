import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook para traducción

export function SportCard({ city, time, longitud, imageLink, onClick }) {
  const { t } = useTranslation(); // Usar el hook para obtener las traducciones

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={onClick} // Trigger para abrir el modal cuando se hace clic
    >
      <img className="rounded-t-lg" src={imageLink} alt={city} /> {/* Imagen del card */}
      <div className="p-5">
        {/* Texto del card con traducciones */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t('city')}: {city} {/* Traducción para "Ciudad" */}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {t('time')}: {time} {/* Traducción para "Hora" */}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {t('longitude')}: {longitud} {/* Traducción para "Longitud" */}
        </p>
      </div>
    </div>
  );
}
