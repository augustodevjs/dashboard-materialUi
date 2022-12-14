import { api } from "../../api/axios-config";
import { IAuth } from "../../types";

export const AuthService = async (
  email: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await api.get("/auth", { data: { email, password } });

    if (data) {
      return data;
    }

    return new Error("Erro no login");
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro no login."
    );
  }
};
