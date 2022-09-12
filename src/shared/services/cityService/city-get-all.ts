import { api } from "../../api/axios-config";
import { Environment } from "../../environment";
import { TCidadesTotalCount } from "../../types";

export const cityGetAll = async (
  page = 1,
  filter = ""
): Promise<TCidadesTotalCount | Error> => {
  try {
    const urlRelative = `/cidades?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nome_like=${filter}`;

    const { data, headers } = await api.get(urlRelative);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar os registros");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros"
    );
  }
};
