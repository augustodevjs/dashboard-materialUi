import { api } from "../../api/axios-config";
import { IDetalheCidades } from "../../types";

export const cityGetById = async (
  id: number
): Promise<IDetalheCidades | Error> => {
  try {
    const { data } = await api.get(`/cidades/${id}`);

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
