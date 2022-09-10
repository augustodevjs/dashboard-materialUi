import React from "react";
import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
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
  onClickSaveAndClose,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
          form="hook-form"
          type="submit"
          variant="contained"
          disableElevation
          color="primary"
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}

      {showButtonSaveLoading && <Skeleton width={110} height={60} />}

      {showButtonSaveAndClose &&
        !showButtonSaveAndCloseLoading &&
        !smDown &&
        !mdDown && (
          <Button
            form="hook-form"
            type="submit"
            variant="outlined"
            disableElevation
            color="primary"
            startIcon={<Icon>save</Icon>}
            onClick={onClickSaveAndClose}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e fechar
            </Typography>
          </Button>
        )}

      {showButtonSaveAndCloseLoading && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {showButtonDelete && !showButtonDeleteLoading && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickDelete}
          color="primary"
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}

      {showButtonDeleteLoading && <Skeleton width={110} height={60} />}

      {showButtonNew && !showButtonNewLoading && !smDown && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickNew}
          color="primary"
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textButtonNew}
          </Typography>
        </Button>
      )}

      {showButtonNewLoading && <Skeleton width={110} height={60} />}

      {showButtonBack &&
        (showButtonNew ||
          showButtonDelete ||
          showButtonSave ||
          showButtonSaveAndClose) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {showButtonBack && !showButtonBackLoading && (
        <Button
          variant="outlined"
          disableElevation
          onClick={onClickBack}
          color="primary"
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}

      {showButtonBackLoading && !smDown && <Skeleton width={110} height={60} />}
    </Box>
  );
};
