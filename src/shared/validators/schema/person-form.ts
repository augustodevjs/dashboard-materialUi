import * as yup from "yup";
import { IFormData } from "../../types";

export const personFormValidationSchema: yup.SchemaOf<IFormData> = yup.object({
  nomeCompleto: yup.string().required("O campo é obrigatório"),
  email: yup
    .string()
    .required("O campo é obrigatório")
    .email("E-mail inválido."),
  cidadeId: yup.string().required("O campo é obrigatório").min(3),
});
