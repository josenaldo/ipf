import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {themeDark} from 'styles'

export function DefaultTemplate({ children }) {
    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            Olá.
            <Box>{children}</Box>
        </ThemeProvider>
    );
}
