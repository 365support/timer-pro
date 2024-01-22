import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>];

function useLocalStorage<T>(
  key: string
): [T | null, Dispatch<SetStateAction<T | null>>];

function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [T | null, Dispatch<SetStateAction<T | null>>] {
  const [value, setValue] = useState<T | null>(() => {
    if (typeof window === "undefined") {
      return defaultValue ?? null;
    }
    const storedValue = getLocalStorageItem(key);
    return storedValue ? storedValue : defaultValue ?? null;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocalStorageItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
