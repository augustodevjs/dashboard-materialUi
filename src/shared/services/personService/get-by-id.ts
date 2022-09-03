import { api } from "../../api/axios-config";
import { IDetalhePessoa } from "../../types";

export const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new Error("Erro ao consultar o registro.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao consultar o registro."
    );
  }
};
