import React from 'react';

export function SportCard({ city, time, longitud, imageLink, onClick }) {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={onClick} // Trigger modal on click
    >
      <img className="rounded-t-lg" src={imageLink} alt={city} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {`City: ${city}`} {/* Muestra la ciudad */}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {`Time: ${time}`} {/* Muestra el tiempo */}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {`Longitude: ${longitud}`} {/* Muestra la longitud */}
        </p>
      </div>
    </div>
  );
}
