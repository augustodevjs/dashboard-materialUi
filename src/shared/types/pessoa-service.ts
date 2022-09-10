export interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: string;
  nomeCompleto: string;
}

export interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: string;
  nomeCompleto: string;
}

export type TPessoasTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};
