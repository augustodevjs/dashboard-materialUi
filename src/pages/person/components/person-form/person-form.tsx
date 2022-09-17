import { Box, Paper, Grid, Typography, LinearProgress } from "@mui/material";

import { IFormPerson } from "../../../../shared/types";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { AutoCompleteCity } from "../AutoCompleteCity/AutoCompleteCity";
import TextField from "@mui/material/TextField";

type Props = {
  onSubmit: SubmitHandler<IFormPerson>;
  isLoading: boolean;
};

export const PersonForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<IFormPerson>();

  return (
    <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
      <Box
        margin={1}
        display="flex"
        flexDirection="column"
        component={Paper}
        variant="outlined"
      >
        <Grid container direction="column" padding={2} spacing={2}>
          {isLoading && (
            <Grid item>
              <LinearProgress variant="indeterminate" />
            </Grid>
          )}

          <Grid item>
            <Typography variant="h6">Geral</Typography>
          </Grid>

          <Grid container item direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Controller
                name="nomeCompleto"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nome completo"
                    disabled={isLoading}
                    error={Boolean(errors.nomeCompleto)}
                    helperText={
                      errors.nomeCompleto && errors.nomeCompleto.message
                    }
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid container item direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    disabled={isLoading}
                    error={Boolean(errors.email)}
                    helperText={errors.email && errors.email.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* <Grid container item direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Controller
                name="cidadeId"
                control={control}
                render={({ field }) => (
                  <AutoCompleteCity isExternalLoading={isLoading} {...field} />
                )}
              />
            </Grid>
          </Grid> */}
        </Grid>
      </Box>
    </form>
  );
};
