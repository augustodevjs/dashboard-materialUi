import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { DrawerMenu, Login } from "./shared/components";
import { AuthProvider } from "./shared/contexts/AuthContext";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          <DrawerProvider>
            <BrowserRouter>
              <DrawerMenu>
                <AppRoutes />
              </DrawerMenu>
            </BrowserRouter>
          </DrawerProvider>
        </Login>
      </AppThemeProvider>
    </AuthProvider>
  );
};
