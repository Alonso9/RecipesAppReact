import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { GoldenTheme } from './GoldenTheme';
import { PurpleTheme } from './PurpleTheme';


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={GoldenTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
