import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Dashboard } from "../pages";
import { useDrawerContext } from "../shared/hooks";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página Inicial",
        icon: "home",
        path: "/pagina-inicial",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
    </Routes>
  );
};
