import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "fontsource-fira-mono";

import "./scss/app.scss";

import { NavBar } from "./components/NavBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4BB0ED",
    },
    secondary: {
      main: "#11cb5f",
    },
    background: {
      default: "#252525",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NavBar />
        <h1 className="name">Colton Almaraz</h1>
        <h2 className="sub-name">Software Developer | Experience Architect</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
