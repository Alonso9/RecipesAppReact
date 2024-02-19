import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Navbar = ({drawerWitdth = 250}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWitdth}px)` }, ml: { sm: `${drawerWitdth}px` }
      }}
    >
      <Toolbar>
        <IconButton>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignContent='center'>
          <Typography variant="h6" noWrap component='div' sx={{ ml: 2 }}> Recipe App</Typography>
          <IconButton color='error'> 
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
          </IconButton>
        </Grid>

      </Toolbar>

    </AppBar>
  )
}
