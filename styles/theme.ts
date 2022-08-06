import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fca311',
    },
    secondary: {
      main: '#14213d',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
