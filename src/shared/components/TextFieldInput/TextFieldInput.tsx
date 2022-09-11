import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  fullWidth?: boolean;
};

export const TextFieldInput = ({ error, fullWidth = true, ...rest }: Props) => {
  return (
    <>
      <TextField {...rest} fullWidth={fullWidth} />
      <p>{error}</p>
    </>
  );
};
