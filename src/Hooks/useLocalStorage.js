import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(() => {
    try {
      const savedItem = window.localStorage.getItem(itemName);

      return savedItem !== null ? JSON.parse(savedItem) : initialValue;
    } catch (error) {
      console.error(`No se pudo leer "${itemName}" de localStorage:`, error);
      return initialValue;
    }
  });

  function saveItem(newItem) {
    try {
      window.localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      console.error(`No se pudo guardar "${itemName}" en localStorage:`, error);
    }
  }

  return [item, saveItem];
}

export { useLocalStorage };
