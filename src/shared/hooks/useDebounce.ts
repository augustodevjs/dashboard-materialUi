import { useCallback } from "react";

export const useDebounce = () => {
  const debounce = useCallback((func: () => void) => {
    setTimeout(() => {
      func();
    }, 3000);
  }, []);

  return { debounce };
};
