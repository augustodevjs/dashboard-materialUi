import { TextField } from "@mui/material";
import { IFormData } from "../../../shared/types";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";

type Props = {
  onSubmit: SubmitHandler<IFormData>;
};

export const PersonForm: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit } = useFormContext<IFormData>();

  return (
    <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="nomeCompleto"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} placeholder="Nome completo" />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} placeholder="Email" />}
      />

      <Controller
        name="cidadeId"
        control={control}
        render={({ field }) => (
          <TextField {...field} placeholder="Id da Cidade" />
        )}
      />
    </form>
  );
};
