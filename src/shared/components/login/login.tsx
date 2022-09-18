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

interface IloginProps {
  children: ReactNode;
}

export const Login: React.FC<IloginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
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

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box width="100%" display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => login("", "")}>
              Entrar
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
