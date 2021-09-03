import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  themeType: 'main',
  palette: {
    primary: {
      main: '#000',
      secondary: '#fff',
      lightGrey: '#E5E9EB',
      blue: '#3F6697',
      primary: '#42B7A0',
      grey: '#5B6871',
      toggleGrey: '#5B6871',
      pink: '#FFBEB0',
      pink2: '#EDC39B',
      yellow: '#FFEEB0',
    },
    cards: {
      ordinary: '#E5E5E5',
      important: 'linear-gradient(191.6deg, #42B7A0 20.36%, #69C7C7 82.97%)',
      shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    gradients: {
      body: 'linear-gradient(172.55deg, #FFFFFF 59.61%, rgba(105, 199, 199, 0.5) 94.22%)',
      main: 'linear-gradient(92.3deg, #43B8A1 0%, #68C7C6 99.15%)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
} as ThemeOptions);

export default theme;
