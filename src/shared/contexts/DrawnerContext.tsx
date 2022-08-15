import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface DrawerContextProps {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

interface DrawerProviderProps {
  children: ReactNode;
}

const DrawerContext = createContext<DrawerContextProps>({} as DrawerContextProps);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  return context;
};
