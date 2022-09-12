import { api } from "../../api/axios-config";
import { Environment } from "../../environment";
import { TPessoasTotalCount } from "../../types";

export const personGetAll = async (
  page = 1,
  filter = ""
): Promise<TPessoasTotalCount | Error> => {
  try {
    const urlRelative = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

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
