import { Spacer } from "../generic/Spacer";
import { About } from "./About/About";
import { Skills } from "./About/Skills";
import { Bio } from "./Bio";
import { MainTitle } from "./MainTitle";
import { Projects } from "./Projects/Projects";

export const MainContent = () => {
  return (
    <div className="main">
      <MainTitle />
      <Bio />
      <Spacer />
      <About />
      <Skills />
      <Spacer />
      <Projects />
    </div>
  );
};
