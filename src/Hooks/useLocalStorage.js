
import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const savedItem = window.localStorage.getItem(itemName);

        if (savedItem !== null) {
          setItem(JSON.parse(savedItem));
        } else {
          setItem(initialValue);
        }
      } catch (error) {
        console.error('Error recuperando datos:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    retrieveData();
  }, [itemName, initialValue]);

  function saveItem(newItem) {
    try {
      window.localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      console.error('Error guardando datos:', error);
      setError(true);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
