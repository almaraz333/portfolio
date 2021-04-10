import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-fira-mono";

import "./scss/app.scss";

import { NavBar } from "./components/NavBar";
import { SideIcons } from "./components/SideIcons";
import { MainContent } from "./components/mainContent/MainContent";

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
      <div className="app bg-background h-100 w-100">
        <NavBar />
        <SideIcons />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
