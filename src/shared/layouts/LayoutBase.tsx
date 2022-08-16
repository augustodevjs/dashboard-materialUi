import { Icon, IconButton, Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import React, { ReactNode } from "react";
import { useDrawerContext } from "../hooks";

interface ILayoutBaseProps {
  children: ReactNode;
  toolbars?: ReactNode;
  title: string;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, title, toolbars }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} display="flex" alignItems="center" gap={1}>

        {smDown ? (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        ) : null}

        <Typography
          variant={smDown ? "h4" : mdDown ? 'h4' : 'h3'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>

      </Box>

      {toolbars && (
        <Box>{toolbars}</Box>
      )}

      <Box flex={1} overflow="auto">{children}</Box>
    </Box>
  );
};
