import { useState } from 'react';
import { TASKS_API } from '../constants';

const useTask = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (taskText = null) => {
    //
    // Set fetch parameters
    //
    let fetchParams;
    if (taskText?.trim()?.length) {
      fetchParams = {
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    let responseData = null;

    //
    // Do fetch
    //
    try {
      setIsLoading(true);
      const response = await fetch(TASKS_API, fetchParams);
      
      if (!response.ok) {
        throw new Error('Request failed!');
      }

      responseData = await response.json();
    } catch (err) {
      console.warn('An error occurred', err);
      setError(err.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
      return responseData;
    }
  };

  return [isLoading, error, request];
};

export default useTask;
