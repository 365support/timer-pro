import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>];
function useLocalStorage<T>(
  key: string
): [T | null, Dispatch<SetStateAction<T | null>>];
function useLocalStorage<T>(key: string, defaultValue?: T) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return defaultValue ?? null;
    }
    const storedValue = getLocalStorageItem<T>(key);

    if (!storedValue) return defaultValue ?? null;
    return storedValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocalStorageItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
