import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }, 
    type: 'light'
  },
  typography: {
    fontFamily: ' "Roboto", "DroidArabicNaskhRegular", "Helvetica", "Arial", sans-serif', 
  },
});

theme= responsiveFontSizes(theme);

export default theme;