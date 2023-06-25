import { indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#03a9f4',
    },
  },
});

export default theme