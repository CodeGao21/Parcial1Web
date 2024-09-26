import React, { useState, useEffect } from 'react';
import { SportCard } from './sportcard'; 

export function CardGallery1() {
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
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
