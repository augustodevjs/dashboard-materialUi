export interface IListagemPessoa {
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

export interface IListagemCidades {
  id: number;
  nome: string;
}

export interface IDetalheCidades {
  id: number;
  nome: string;
}

export type TCidadesTotalCount = {
  data: IListagemCidades[];
  totalCount: number;
};
