interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

export interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

export type TPessoasTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};
