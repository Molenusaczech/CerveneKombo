import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#f5f5f5',
            paper: '#ffffff'
        },
        primary: {
            main: '#056096ff',
            contrastText: '#ffffff'
        },
    }
});

export default theme;