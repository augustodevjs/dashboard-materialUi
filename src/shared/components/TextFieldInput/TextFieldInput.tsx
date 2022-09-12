import { TextField, TextFieldProps } from "@mui/material";

type Props = Partial<TextFieldProps> & {
  fullWidth?: boolean;
};

export const TextFieldInput = ({ fullWidth = true, ...rest }: Props) => {
  return (
    <>
      <TextField {...rest} fullWidth={fullWidth} />
    </>
  );
};
