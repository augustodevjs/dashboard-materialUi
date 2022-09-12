import { api } from "../../api/axios-config";

export const cityDeleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/cidades/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao apagar o registro."
    );
  }
};
