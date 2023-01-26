import Navbar from "./components/main-navbar/Navbar"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from "./pages/main/Main";
import { Toaster } from 'react-hot-toast';
import SelectedOptionsProvider from "./context/SelectedOptions";

const theme = createTheme({
  palette: {
    primary: {
      main: '#292C33',
      dark: '#1e2025',
      light: '#404348',
      A100: '#282B30',
      'contrastText': '#878484'
    },
    secondary: {
      main: "#5C61F0",
      light: "#A5B4FC",
      dark: "#4338CA",
    },
    grey: {
      '500': "#282B30",
      '400': "#6D7175"
    },
  },
  breakpoints: {
    values: {
        xs: 320,
        sm: 425,
        md: 768,
        lg: 1300,
        xl: 1410, 
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white"
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white'
        }
      }
    }
  },
})

function App() {
  return (
    <SelectedOptionsProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main />
        <Toaster
          containerStyle={{
            top: 30,
            left: 30,
            bottom: 30,
            right: 30,
            fontFamily: "Roboto, Helvetica, Arial ,sans-serif"
          }}
          position='top-right'
        />
      </ThemeProvider>
    </SelectedOptionsProvider>
  );
}

export default App;