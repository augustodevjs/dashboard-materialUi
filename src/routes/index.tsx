import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/hooks";
import {
  Dashboard,
  DetailsCity,
  DetailsPerson,
  ListingCity,
  ListingPerson,
} from "../pages";

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
        label: "Cidades",
        icon: "location_city",
        path: "/cidades",
      },
      {
        label: "Pessoas",
        icon: "people",
        path: "/pessoas",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/pessoas" element={<ListingPerson />} />
      <Route path="/pessoas/detalhe/:id" element={<DetailsPerson />} />

      <Route path="/cidades" element={<ListingCity />} />
      <Route path="/cidades/detalhe/:id" element={<DetailsCity />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
