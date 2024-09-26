import React, { useState, useEffect } from 'react';
import { SportCard } from './sportcard'; 

export function CardGallery2() {
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
