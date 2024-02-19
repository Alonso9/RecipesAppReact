import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SideBar = ({ drawerWidth }) => {
  const opc = ["Categories", "Area", "Ingredients"];
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx= {{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap> Ramon Alonso</Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    opc.map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon color="error">
                                    <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}