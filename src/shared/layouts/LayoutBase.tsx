import { Box } from "@mui/system";
import React, { ReactNode } from "react";

interface ILayoutBase {
  children: ReactNode;
  title: string;
}

export const LayoutBase: React.FC<ILayoutBase> = ({ children, title }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box>{title}</Box>

      <Box>Barra de Ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
