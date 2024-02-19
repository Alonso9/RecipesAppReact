import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const GoldenTheme = createTheme({
    palette: {
        primary: {
            main: '#746b19'
        },
        secondary: {
            main: '#70501e'
        },
        error: {
            main: red[400]
        }
    }
})