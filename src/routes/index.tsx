import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Dashboard, ListingPerson } from "../pages";
import { useDrawerContext } from "../shared/hooks";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página Inicial",
        icon: "home",
        path: "/home",
      },
      {
        label: "Pessoas",
        icon: "people",
        path: "/person",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/person" element={<ListingPerson />} />
      <Route path="/pessoas/detalhe/:id" element={<p>Detalhe</p>} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
