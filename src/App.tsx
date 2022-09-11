import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
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
