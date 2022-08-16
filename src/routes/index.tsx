import { Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página Inicial",
        icon: "home",
        path: "/pagina-inicial"
      }
    ])
  }, []);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button onClick={toggleDrawerOpen} variant="contained" color="primary">
            Toogle Drawer
          </Button>
        }
      />
    </Routes>
  );
};
