import { api } from "../../api/axios-config";
import { IDetalheCidades } from "../../types";

export const cityUpdateById = async (
  id: number,
  dados: IDetalheCidades
): Promise<void | Error> => {
  try {
    await api.put<IDetalheCidades>(`/cidades/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o registro."
    );
  }
};
