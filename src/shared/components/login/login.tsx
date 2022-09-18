import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { useAuthContext } from "../../hooks";
import { loginSchema } from "../../validators";
import { IFormLogin, IloginProps } from "../../types";

export const Login: React.FC<IloginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    login(data.email, data.password);
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
              <Button type="submit" variant="contained">
                Entrar
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </form>
  );
};
