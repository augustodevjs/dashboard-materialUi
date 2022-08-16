import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const useAppThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
