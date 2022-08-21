import { Routes, Route } from "react-router-dom";
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
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/person" element={<ListingPerson />} />
    </Routes>
  );
};
