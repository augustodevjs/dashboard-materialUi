import { api } from "../../api/axios-config";
import { IDetalhePessoa } from "../../types";

export const personUpdateById = async (
  id: number,
  dados: IDetalhePessoa
): Promise<void | Error> => {
  try {
    await api.put<IDetalhePessoa>(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o registro."
    );
  }
};
