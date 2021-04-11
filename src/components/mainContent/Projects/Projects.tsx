import { Project } from "./Project";
import { Box } from "@material-ui/core";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="sub-name pb-10 text-white">Some of my work</h2>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Project className="odd" />
        <Project className="even" />
        <Project className="odd" />
        <Project className="even" />
      </Box>
    </div>
  );
};
