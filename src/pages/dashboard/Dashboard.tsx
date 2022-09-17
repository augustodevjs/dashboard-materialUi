import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";
import { DetailsTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
import Typography from "@mui/material/Typography";
import { cityGetAll, personGetAll } from "../../shared/services";

export const Dashboard: React.FC = () => {
  const [isLoadingCity, setIsLoadingCity] = useState(true);
  const [isLoadingPerson, setIsLoadingPerson] = useState(true);

  const [totalCountCity, setTotalCountCity] = useState(0);
  const [totalCountPerson, setTotalCountPerson] = useState(0);

  useEffect(() => {
    setIsLoadingCity(true);
    setIsLoadingPerson(true);

    cityGetAll(1).then((result) => {
      setIsLoadingCity(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setTotalCountCity(result.totalCount);
      }
    });

    personGetAll(1).then((result) => {
      setIsLoadingPerson(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setTotalCountPerson(result.totalCount);
      }
    });
  }, []);

  return (
    <LayoutBase
      title="Página inicial"
      toolbars={
        <DetailsTools
          showButtonNew={false}
          showButtonSave={false}
          showButtonDelete={false}
          showButtonBack={false}
        />
      }
    >
      <Box width="100%" display="flex">
        <Grid container margin={2}>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de Pessoas
                  </Typography>

                  <Box
                    padding={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {!isLoadingPerson && (
                      <Typography variant="h1">{totalCountPerson}</Typography>
                    )}

                    {isLoadingPerson && (
                      <Typography variant="h3">Carregando...</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de Cidades
                  </Typography>

                  <Box
                    padding={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {!isLoadingCity && (
                      <Typography variant="h1">{totalCountCity}</Typography>
                    )}

                    {isLoadingCity && (
                      <Typography variant="h3">Carregando...</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </LayoutBase>
  );
};
