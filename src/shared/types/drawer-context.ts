import { ReactNode } from "react";

export interface IDrawerOption {
  path: string;
  icon: string;
  label: string;
}

export interface IDrawerContextProps {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

export interface IDrawerProviderProps {
  children: ReactNode;
}
