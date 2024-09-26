import React, { useState, useEffect } from 'react';

export function Bar() {
  const [data, setData] = useState(null);

  // Fetch data from the API
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
    <div className="fixed bottom-0 left-0 z-50 w-full h-24 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {/* Full Name */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">Name</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data["fullname "] : 'Loading...'}
          </span>
        </div>

        {/* Cycling Time */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">Cycling</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data.cyclingtime : 'Loading...'}
          </span>
        </div>

        {/* Running Time */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">Running</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data.runningtime : 'Loading...'}
          </span>
        </div>

        {/* Swimming Time */}
        <div className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <span className="text-sm text-gray-500 dark:text-gray-400">Swimming</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data ? data.swimmingtime : 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  );
}
