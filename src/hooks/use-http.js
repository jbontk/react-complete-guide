import { useCallback, useState } from 'react';

const useHttp = (requestConfig, tranformResponseFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async () => {
    const fetchParams = {
      method: requestConfig.method || 'GET',
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: requestConfig.headers || {},
    };

    try {
      setIsLoading(true);
      const response = await fetch(requestConfig.url, fetchParams);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      tranformResponseFn(data);
    } catch (err) {
      console.warn('An error occurred', err);
      setError(err.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [requestConfig, tranformResponseFn]);

  return { isLoading, error, sendRequest };
};

export default useHttp;
