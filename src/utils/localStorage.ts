const setLocalStorageItem = <T>(key: string, value: T) => {
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error setting localStorage item:", error);
  }
};

const getLocalStorageItem = (key: string) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error reading localStorage item:", error);
    return null;
  }
};

const removeLocalStorageItem = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing localStorage item:", error);
  }
};

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };
