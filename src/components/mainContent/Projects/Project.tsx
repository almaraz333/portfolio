import { Paper } from "@material-ui/core";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectImage } from "./ProjectImage";

export const Project = () => {
  return (
    <div className="project">
      <h3>Title</h3>
      <div className="project-content-container">
        <ProjectImage />
        <ProjectDescription />
      </div>
    </div>
  );
};
