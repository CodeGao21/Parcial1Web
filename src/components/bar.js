import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook para traducción

export function Bar() {
  const { t } = useTranslation(); // Usamos el hook para las traducciones
  const [data, setData] = useState(null);

  // Fetch de los datos desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my.api.mockaroo.com/bar.json?key=c3b25970');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-10 w-full h-24 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {/* Nombre completo */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">{t('name')}</span> {/* Traducción para "Name" */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data["fullname "] : t('loading')} {/* Traducción para "Loading..." */}
          </span>
        </div>

        {/* Tiempo de Ciclismo */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">{t('cyclingtime')}</span> {/* Traducción para "Cycling Time" */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data.cyclingtime : t('loading')} {/* Traducción para "Loading..." */}
          </span>
        </div>

        {/* Tiempo de Carrera */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">{t('runningtime')}</span> {/* Traducción para "Running Time" */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data.runningtime : t('loading')} {/* Traducción para "Loading..." */}
          </span>
        </div>

        {/* Tiempo de Natación */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">{t('swimmingtime')}</span> {/* Traducción para "Swimming Time" */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data.swimmingtime : t('loading')} {/* Traducción para "Loading..." */}
          </span>
        </div>
      </div>
    </div>
  );
}
