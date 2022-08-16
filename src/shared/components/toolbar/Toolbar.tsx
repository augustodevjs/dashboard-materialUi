import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"
import React from "react"

interface IToolbar {
  textSearch?: string;
  showInputSearch?: boolean;
  onChangeInputSearch?: (newText: string) => void;

  textButtonNew?: string;
  showButtonNew?: boolean;
  onClickNew?: () => void;
}

export const Toolbar: React.FC<IToolbar> = ({
  textSearch = '',
  showInputSearch = false,
  onChangeInputSearch,
  showButtonNew = true,
  textButtonNew = 'Novo',
  onClickNew,
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
      {showInputSearch && (
        <TextField
          size="small"
          value={textSearch}
          onChange={(e) => onChangeInputSearch?.(e.target.value)}
          placeholder="Pesquisar..."
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">

        {showButtonNew && (
          <Button
            variant="contained"
            disableElevation
            color="primary"
            endIcon={<Icon>add</Icon>}
            onClick={onClickNew}
          >
            {textButtonNew}
          </Button>
        )}
      </Box>
    </Box>
  )
}