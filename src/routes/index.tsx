import { Routes, Route, Navigate } from "react-router-dom";
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
      },
      {
        label: "Cidades",
        icon: "star",
        path: "/cidade"
      },
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
      {/* <Route path="*" element={<Navigate to="/pagina-inicial" />} /> */}
    </Routes>
  );
};
