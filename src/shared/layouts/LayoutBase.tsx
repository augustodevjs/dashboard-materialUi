import React from "react";

import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

import { useDrawerContext } from "../hooks";
import { ILayoutBaseProps } from "../types/layout-base";

export const LayoutBase: React.FC<ILayoutBaseProps> = ({
  title,
  toolbars,
  children,
}) => {
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display="flex"
        alignItems="center"
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? "h4" : mdDown ? "h4" : "h3"}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>

      {toolbars && <Box>{toolbars}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
