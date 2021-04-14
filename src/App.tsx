import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-fira-mono";

import "./scss/app.scss";

import { NavBar } from "./components/NavBar";
import { SideIcons } from "./components/SideIcons";
import { MainContent } from "./components/mainContent/MainContent";
import { MobileNav } from "./components/MobileNav";

import { useScreenType } from "./Hooks";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1579B4",
    },
    secondary: {
      main: "#11cb5f",
    },
    success: {
      main: "#4ce649",
    },
    background: {
      default: "#3c404a",
    },
  },
});

function App() {
  const screenType = useScreenType();

  if (screenType === "mobile") {
    return (
      <ThemeProvider theme={theme}>
        <div className="app bg-background h-100 w-100">
          <MobileNav />
          <MainContent />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app bg-background h-100 w-100">
        <NavBar />
        <SideIcons />
        <MainContent screenType={screenType} />
      </div>
    </ThemeProvider>
  );
}

export default App;
