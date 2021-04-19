import { Spacer } from "../generic/Spacer";
import { About } from "./About/About";
import { Skills } from "./About/Skills";
import { Bio } from "./Bio";
import { MainTitle } from "./MainTitle";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";

export type MainContentProps = {
  screenType?: "mobile" | "mid" | "desktop";
};

export const MainContent = ({ screenType }: MainContentProps) => {
  return (
    <div className="main">
      <MainTitle />
      <Bio />
      <Spacer />
      <About />
      <Skills />
      <Spacer />
      <Projects />
      <Spacer />
      <Contact />
    </div>
  );
};
