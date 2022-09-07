import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";

interface IFormData {
  email: string;
  cityId: string;
  fullName: string;
}

type Props = {
  onSubmit: SubmitHandler<IFormData>;
};

export const PersonForm: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit } = useFormContext<IFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Email" />}
      />

      <Controller
        name="cityId"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Id da Cidade" />}
      />

      <Controller
        name="fullName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Nome completo" />}
      />

      <input type="submit" />
    </form>
  );
};
