import React, { ReactNode } from "react"

import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts";

interface DrawerMenuProps {
  children: ReactNode;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/90275457?s=400&u=e4a9c35d965dc42c38c6f0b3655a742b8f1f2aa9&v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}