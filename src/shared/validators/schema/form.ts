import * as yup from "yup";
import { IFormCity, IFormPerson } from "../../types";

export const personFormValidationSchema: yup.SchemaOf<IFormPerson> = yup.object(
  {
    nomeCompleto: yup.string().required("O campo é obrigatório"),
    email: yup
      .string()
      .email("O e-mail é inválido")
      .required("O campo é obrigatório"),
    cidadeId: yup.number().required("O campo é obrigatório"),
  }
);

export const cityFormValidationSchema: yup.SchemaOf<IFormCity> = yup.object({
  nome: yup
    .string()
    .required("O campo é obrigatório")
    .min(3, "O campo deve conter no mínimo 3 caracteres"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O campo é obrigatório"),
  password: yup
    .string()
    .required("O campo é obrigatório")
    .min(5, "Deve conter no mínimo 5 caracteres."),
});
