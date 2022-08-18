import { createContext, useCallback, useState } from "react";

import {
  IDrawerContextProps,
  IDrawerOption,
  IDrawerProviderProps,
} from "../types";

export const DrawerContext = createContext<IDrawerContextProps>(
  {} as IDrawerContextProps
);

export const DrawerProvider = ({ children }: IDrawerProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  // Vai abrir e fechar o drawer
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  // vai pegar os valores da função e vai setar no drawerOptions para mostrar os links do drawer.
  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
