import React from "react";
import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from "@mui/material";
import { IDetailsToolsProps } from "../../types";

export const DetailsTools: React.FC<IDetailsToolsProps> = ({
  textButtonNew = "Novo",

  showButtonNew = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndClose = false,

  showButtonBackLoading = false,
  showButtonNewLoading = false,
  showButtonSaveLoading = false,
  showButtonDeleteLoading = false,
  showButtonSaveAndCloseLoading = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveAndClose,
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
      {showButtonSave && !showButtonSaveLoading && (
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

      {showButtonSaveLoading && <Skeleton width={110} height={60} />}

      {showButtonSaveAndClose && !showButtonSaveAndCloseLoading && (
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

      {showButtonSaveAndCloseLoading && <Skeleton width={180} height={60} />}

      {showButtonDelete && !showButtonDeleteLoading && (
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

      {showButtonDeleteLoading && <Skeleton width={110} height={60} />}

      {showButtonNew && !showButtonNewLoading && (
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

      {showButtonNewLoading && <Skeleton width={110} height={60} />}

      <Divider variant="middle" orientation="vertical" />

      {showButtonBack && !showButtonBackLoading && (
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

      {showButtonBackLoading && <Skeleton width={110} height={60} />}
    </Box>
  );
};
