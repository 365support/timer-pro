import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

const isServer = typeof window === "undefined";

function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>];
function useLocalStorage<T>(
  key: string
): [T | null, Dispatch<SetStateAction<T | null>>];
function useLocalStorage<T>(key: string, defaultValue?: T) {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    return defaultValue ?? null;
  });

  useEffect(() => {
    if (isServer === true) return;

    try {
      const item = getLocalStorageItem<T>(key);
      const value = item ?? defaultValue ?? null;
      setStoredValue(value);
      setLocalStorageItem(key, value);
    } catch (error) {
      console.error(error);
      setStoredValue(defaultValue ?? null);
    }
  }, [key, defaultValue]);

  const setValue: Dispatch<SetStateAction<T | null>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (!isServer) {
        setLocalStorageItem(key, valueToStore);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
