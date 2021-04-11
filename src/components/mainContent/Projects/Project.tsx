import { ProjectDescription } from "./ProjectDescription";
import { ProjectImage } from "./ProjectImage";
import { TechUsed } from "./TechUsed";

import { useScreenType } from "../../../Hooks";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
} from "@material-ui/core";
import Cat from "../../../images/ya.png";

export type ProjectProps = {
  className?: string;
};
export const Project = ({ className }: ProjectProps) => {
  const screenType = useScreenType();
  return (
    <>
      {screenType === "desktop" ? (
        <div className="project">
          <h3 className={className === "odd" ? "" : "text-right"}>
            Title of a project
          </h3>
          <div className="project-content-container">
            <ProjectImage className={className} />
            <ProjectDescription className={className} />
            <TechUsed className={className} />
          </div>
        </div>
      ) : (
        <Card variant="outlined" className="project-card">
          <CardMedia
            src={Cat}
            title="Contemplative Reptile"
            style={{ height: "70%" }}
            component="img"
          />
          <CardContent>
            <h1 className="text-center mb-3 project-title">
              Title of a project
            </h1>
            <TechUsed />
          </CardContent>
        </Card>
      )}
    </>
  );
};
