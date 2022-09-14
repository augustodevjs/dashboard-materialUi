import { api } from "../../api/axios-config";
import { IDetalheCidades } from "../../types";

export const cityCreate = async (
  dados: Omit<IDetalheCidades, "id">
): Promise<number | Error> => {
  try {
    const { data } = await api.post<IDetalheCidades>("/cidades", dados);

    if (data) {
      return data.id;
    }

    return new Error("Erro ao criar o registro.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao criar o registro."
    );
  }
};
