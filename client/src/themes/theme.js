import { createMuiTheme } from '@material-ui/core/styles'


// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#222222'
      // main: '#303030',
    },
    secondary: {
      main: '#434343'
      // main: '#424242'
    },
    accent: {
      dark: "#464064",
      mid: "#585178",
      light: "#B9ABFD"
      
    },
    text: {
      main: '#ffffff',
      alt: '#F8F9F9',
      secondary: "#B3B3B3"
    }
  },
})

export default theme;

// dark: #
// Med: #222222
// Light: #434343