import React, { useState, useEffect } from 'react';
import { SportCard } from './sportcard'; 

export function CardGallery3() {
  const [locations, setLocations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Fetch the data from the API
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {locations.map((location, index) => (
          <div key={index}>
            <SportCard
              city={location.city || 'Unknown City'}  // Pasa 'city' a SportCard
              time={location.time || 'Unknown Time'} // Pasa 'time' a SportCard
              longitud={location.longitud || 'Unknown Longitude'} // Pasa 'longitud' a SportCard
              imageLink={`data:image/jpeg;base64,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`}
              onClick={() => openModal(location)}
            />
          </div>
        ))}
      </div>

      {isOpen && selectedLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-4xl w-full">
            <div className="relative">
              {/* Image with overlayed text */}
              <img
                className="w-full h-auto rounded-lg"
                src={`https://picsum.photos/300/200?random=${selectedLocation.city || 'placeholder'}`}
                alt={selectedLocation.city || 'Unknown City'}
              />
              {/* Overlay text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h3 className="text-3xl font-bold">City: {selectedLocation.city || 'Unknown City'}</h3>
                <p className="text-lg">Time: {selectedLocation.time || 'Unknown Time'}</p>
                <p className="text-lg">Longitude: {selectedLocation.longitud || 'Unknown Longitude'}</p>
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
