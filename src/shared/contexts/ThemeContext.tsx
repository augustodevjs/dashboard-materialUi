import { createContext, useCallback, useMemo, useState } from "react";

import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "../themes";
import { IThemeContextProps, IThemeProviderProps } from "../types";

export const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);

export const AppThemeProvider = ({ children }: IThemeProviderProps) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  // Troca o tema de light para dark
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  // Se o retorno for light ou theme ele vai adicionar as configurações de themes.
  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
