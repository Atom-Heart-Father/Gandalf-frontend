import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Dashboard from './pages/Dashboard'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#15131e",
      light: '#1d1d27', 
    },
    background: {
      default: "#15131e",
    },
    text: {
      primary: "#f4f4f6",
    },
  }
});

function App() {
  return (
    <>
      <Dashboard theme={theme}/>
    </>
  );
}

export default App;
