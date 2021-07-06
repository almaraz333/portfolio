import { Project } from "./Project";
import { Box } from "@material-ui/core";

import Biggby from "../../../images/biggby.png";
import Python from "../../../images/nfl_python.png";
import Symplee from "../../../images/symplee.png";
import GameOfLife from "../../../images/GameOfLife.png";
import Casino from "../../../images/casinoDice.png";

import {
  biggbyText,
  footballSearcherText,
  sympleeText,
  casinoText,
  gameOfLifeText,
} from "../../../Assets/Text";

export type TechProps = {
  tech: string;
};

export const Projects = () => {
  const biggbyTech: TechProps[] = [
    { tech: "React" },
    { tech: "GraphQL" },
    { tech: "Apollo" },
    { tech: "MySQL" },
    { tech: "Bootstrap" },
  ];

  const webScraperTech: TechProps[] = [
    { tech: "Python" },
    { tech: "Beautiful Soup" },
    { tech: "HTML" },
  ];

  const gameOfLifeTech: TechProps[] = [
    { tech: "Python" },
    { tech: "PyGame" },
    { tech: "Numpy" },
  ];

  const casinoGameTech: TechProps[] = [{ tech: "C++" }];

  return (
    <div className="projects-container" id="Projects">
      <h2 className="sub-name pb-10 text-white text-center">Projects</h2>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Project
          title="Biggby"
          image={Biggby}
          className="odd"
          tech={biggbyTech}
          description={biggbyText}
          link="https://app.biggby.com"
          type="demo"
        />
        <Project
          title="Conway's Game of Life in Python"
          image={GameOfLife}
          className="even"
          tech={gameOfLifeTech}
          description={gameOfLifeText}
          link="https://github.com/almaraz333/conways-game-of-life"
          type="repo"
        />
        <Project
          title="Casino Game in C++"
          image={Casino}
          className="odd"
          tech={casinoGameTech}
          description={casinoText}
          link="https://github.com/almaraz333/casino"
          type="repo"
        />
        <Project
          title="Symplee"
          image={Symplee}
          className="even"
          tech={biggbyTech}
          description={sympleeText}
          link="https://symplee.app/"
          type="demo"
        />
        <Project
          title="Sports Web Scraper"
          image={Python}
          className="odd"
          tech={webScraperTech}
          description={footballSearcherText}
          link="https://github.com/almaraz333/Sports-Web-Scraper"
          type="repo"
        />
      </Box>
    </div>
  );
};
