import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { useAuthContext } from "../../hooks";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { SubmitHandler } from "react-hook-form/dist/types";
import CircularProgress from "@mui/material/CircularProgress";

interface IloginProps {
  children: ReactNode;
}

interface IFormLogin {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O campo é obrigatório"),
  password: yup
    .string()
    .required("O campo é obrigatório")
    .min(5, "Deve conter no mínimo 5 caracteres."),
});

export const Login: React.FC<IloginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    setIsLoading(true);
    login(data.email, data.password);
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2} width={250}>
              <Typography variant="h6" align="center">
                Identifique-se
              </Typography>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    disabled={isLoading}
                    error={Boolean(errors.email)}
                    helperText={errors.email && errors.email.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Senha"
                    type="password"
                    disabled={isLoading}
                    error={Boolean(errors.password)}
                    helperText={errors.password && errors.password.message}
                    {...field}
                  />
                )}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Box width="100%" display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                endIcon={
                  isLoading ? (
                    <CircularProgress
                      variant="indeterminate"
                      size={20}
                      color="inherit"
                    />
                  ) : undefined
                }
              >
                Entrar
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </form>
  );
};
