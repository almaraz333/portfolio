import "fontsource-fira-mono";

import "./scss/app.scss";

import { NavBar } from "./components/NavBar";
import { SideIcons } from "./components/SideIcons";
import { MainContent } from "./components/mainContent/MainContent";
import { MobileNav } from "./components/MobileNav";

import { useScreenType } from "./Hooks";
import { Footer } from "./components/Footer";

function App() {
  const screenType = useScreenType();

  if (screenType === "mobile") {
    return (
      <div className="app bg-background h-100 w-100">
        <MobileNav />
        <MainContent />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app bg-background h-100 w-100">
      <NavBar />
      <SideIcons />
      <MainContent screenType={screenType} />
      <Footer />
    </div>
  );
}

export default App;
