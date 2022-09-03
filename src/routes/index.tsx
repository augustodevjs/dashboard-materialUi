import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/hooks";
import { Dashboard, DetailsPerson, ListingPerson } from "../pages";

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
      <Route path="/pessoas/detalhe/:id" element={<DetailsPerson />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
