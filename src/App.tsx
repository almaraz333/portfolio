import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-fira-mono";

import "./scss/app.scss";

import { NavBar } from "./components/NavBar";
import { SideIcons } from "./components/SideIcons";
import { MainContent } from "./components/mainContent/MainContent";
import { MobileNav } from "./components/MobileNav";
import { LoadingScreen } from "./Views/LoadingScreen/LoadingScreen";

import { useScreenType } from "./Hooks";
import { useRecoilValue } from "recoil";
import { showLoadingScreenState } from "./atoms";
import { Footer } from "./components/Footer";

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

  const showLoadingScreen = useRecoilValue(showLoadingScreenState);

  if (showLoadingScreen) {
    return <LoadingScreen />;
  }

  if (screenType === "mobile") {
    return (
      <ThemeProvider theme={theme}>
        <div className="app bg-background h-100 w-100">
          <MobileNav />
          <MainContent />
          <Footer />
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
