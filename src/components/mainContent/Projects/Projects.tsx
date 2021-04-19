import { Project } from "./Project";
import { Box } from "@material-ui/core";

import Biggby from "../../../images/biggby.png";
import Python from "../../../images/nfl_python.png";
import Symplee from "../../../images/symplee.png";

import {
  biggbyText,
  footballSearcherText,
  sympleeText,
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
  return (
    <div className="projects-container" id="projects">
      <h2 className="sub-name pb-10 text-white text-center">Some of my work</h2>
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
