import { Box } from '@mui/material';
import { SideBar, Navbar } from '../components'

export const RecipeLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>
      <Navbar drawerWitdth={165}/>
      <SideBar/>
      {children}
    </Box>
  )
}
