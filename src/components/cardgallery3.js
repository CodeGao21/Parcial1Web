import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook para traducción
import { SportCard } from './sportcard'; 

export function CardGallery3() {
  const { t } = useTranslation(); // Usamos el hook para las traducciones
  const [locations, setLocations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Fetch de datos desde la API
  useEffect(() => {
    fetch('https://my.api.mockaroo.com/cards_mockup.json?key=c3b25970')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setLocations(data);
        } else {
          console.error('Expected an array but got', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const openModal = (location) => {
    setSelectedLocation(location);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedLocation(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
        {locations.map((location, index) => (
          <div key={index}>
            <SportCard
              city={location.city || t('unknownCity')}  // Usamos 't()' para traducir "Unknown City"
              time={location.time || t('unknownTime')}  // Traducción para "Unknown Time"
              longitud={location.longitud || t('unknownLongitude')}  // Traducción para "Unknown Longitude"
              imageLink="https://plus.unsplash.com/premium_photo-1664475361436-e37f6f2ba407?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onClick={() => openModal(location)}
            />
          </div>
        ))}
      </div>

      {isOpen && selectedLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-4xl w-full">
            <div className="relative">
              {/* Imagen con texto superpuesto */}
              <img
                className="w-full h-auto rounded-lg"
                src={`https://picsum.photos/300/200?random=${selectedLocation.city || 'placeholder'}`}
                alt={selectedLocation.city || t('unknownCity')}  // Traducción para "Unknown City"
              />
              {/* Texto superpuesto */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h3 className="text-3xl font-bold">{t('city')}: {selectedLocation.city || t('unknownCity')}</h3>
                <p className="text-lg">{t('time')}: {selectedLocation.time || t('unknownTime')}</p>
                <p className="text-lg">{t('longitude')}: {selectedLocation.longitud || t('unknownLongitude')}</p>
              </div>
            </div>

            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
