import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Dashboard, ListingCity } from "../pages";
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
        label: "Cidades",
        icon: "location_city",
        path: "city",
      },
    ]);
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/city" element={<ListingCity />} />
    </Routes>
  );
};
