import { TextField, TextFieldProps } from "@mui/material";
import { Container } from "./TextFieldInput.styles";

type Props = Partial<TextFieldProps> & {
  fullWidth?: boolean;
};

export const TextFieldInput = ({ fullWidth = true, ...rest }: Props) => {
  return (
    <Container>
      <TextField {...rest} fullWidth={fullWidth} />
    </Container>
  );
};
