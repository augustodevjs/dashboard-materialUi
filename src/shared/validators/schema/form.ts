import * as yup from "yup";
import { IFormCity, IFormPerson } from "../../types";

export const personFormValidationSchema: yup.SchemaOf<IFormPerson> = yup.object(
  {
    nomeCompleto: yup.string().required("O campo é obrigatório"),
    email: yup
      .string()
      .required("O campo é obrigatório")
      .email("E-mail inválido."),
    cidadeId: yup.string().required("O campo é obrigatório").min(3),
  }
);

export const cityFormValidationSchema: yup.SchemaOf<IFormCity> = yup.object({
  nome: yup.string().required("O campo é obrigatório").min(3),
});
