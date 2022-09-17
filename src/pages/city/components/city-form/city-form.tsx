import { Box, Paper, Grid, Typography, LinearProgress } from "@mui/material";

import { IFormCity } from "../../../../shared/types";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

type Props = {
  onSubmit: SubmitHandler<IFormCity>;
  isLoading: boolean;
};

export const CityForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<IFormCity>();

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
                name="nome"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nome"
                    disabled={isLoading}
                    error={Boolean(errors.nome)}
                    helperText={errors.nome && errors.nome.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
