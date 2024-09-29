import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { CardGallery1 } from "./cardgallery1";
import { CardGallery2 } from "./cardgallery2";
import { CardGallery3 } from "./cardgallery3";
import { Bar } from "./bar";

export function Home() {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Botones de cambio de idioma */}
      <div className="absolute top-4 right-4">
        <button onClick={() => changeLanguage('en')} className="mx-2">EN</button>
        <button onClick={() => changeLanguage('es')} className="mx-2">ES</button>
      </div>

      {/* Contenido principal con tres columnas */}
      <div className="flex flex-grow p-5 space-x-5"> 
        <div className="flex-1 p-5 bg-white-300">
          <h2 className="text-center mb-4 text-xl font-bold">{t('cycling')}</h2> {/* Texto traducido */}
          <CardGallery1 />
        </div>
        <div className="flex-1 p-5 bg-white-300">
          <h2 className="text-center mb-4 text-xl font-bold">{t('running')}</h2> {/* Texto traducido */}
          <CardGallery2 />
        </div>
        <div className="flex-1 p-5 bg-white-300">
          <h2 className="text-center mb-4 text-xl font-bold">{t('swimming')}</h2> {/* Texto traducido */}
          <CardGallery3 />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Barra de navegación inferior */}
      <div className="mt-auto">
        <Bar />
      </div>
    </div>
  );
}
