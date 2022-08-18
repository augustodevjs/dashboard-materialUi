import React from "react";
import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";
import { IDetailsToolsProps } from "../../types";

export const DetailsTools: React.FC<IDetailsToolsProps> = ({ 
  textButtonNew = 'Novo',

  showButtonNew = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndClose = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveAndClose
}) => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
    >
      {showButtonSave && (
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={onClickSave}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}

      {showButtonSaveAndClose && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickSaveAndClose}
          color="primary"
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}

      {showButtonDelete && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickDelete}
          color="primary"
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}

      {showButtonNew && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickNew}
          color="primary"
          startIcon={<Icon>add</Icon>}
        >
          Novo
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {showButtonBack && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickBack}
          color="primary"
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
