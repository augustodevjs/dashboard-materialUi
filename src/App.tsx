import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DrawerMenu } from "./shared/components";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <DrawerMenu>
            <AppRoutes />
          </DrawerMenu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
