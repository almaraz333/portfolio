import { Project } from "./Project";
import { Box } from "@material-ui/core";

import Biggby from "../../../images/biggby.png";
import Python from "../../../images/nfl_python.png";
import Symplee from "../../../images/symplee.png";
import ReactLogo from "../../../images/react.png";
import GraphqlLogo from "../../../images/graphql_logo.png";
import ApolloLogo from "../../../images/apollo_logo.png";

export type TechProps = {
  tech: string;
  image: string;
};

export const Projects = () => {
  const biggbyTech: TechProps[] = [
    { tech: "React", image: ReactLogo },
    { tech: "GraphQL", image: GraphqlLogo },
    { tech: "Apollo", image: ApolloLogo },
  ];
  return (
    <div className="projects-container">
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
        />
        <Project
          title="Sports Web Scraper"
          image={Python}
          className="even"
          tech={biggbyTech}
        />
        <Project
          title="Symplee"
          image={Symplee}
          className="odd"
          tech={biggbyTech}
        />
      </Box>
    </div>
  );
};
