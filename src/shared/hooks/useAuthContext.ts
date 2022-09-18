import { useContext } from "react";
import { AuthContext } from "../contexts";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
