import { useContext } from "react";
import { DrawerContext } from "../contexts";

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  return context;
};