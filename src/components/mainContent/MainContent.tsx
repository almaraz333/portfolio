import { Spacer } from "../generic/Spacer";
import { About } from "./About/About";
import { Skills } from "./About/Skills";
import { Bio } from "./Bio";
import { MainTitle } from "./MainTitle";

export const MainContent = () => {
  return (
    <div className="main">
      <MainTitle />
      <Bio />
      <Spacer />
      <About />
      <Skills />
    </div>
  );
};
