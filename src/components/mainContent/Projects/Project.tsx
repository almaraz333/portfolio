import { ProjectDescription } from "./ProjectDescription";
import { ProjectImage } from "./ProjectImage";
import { TechUsed } from "./TechUsed";

import { useScreenType } from "../../../Hooks";

import { Card, CardContent, CardMedia } from "@material-ui/core";

import { TechProps } from "./Projects";

export type ProjectProps = {
  className?: string;
  image: string;
  title: string;
  tech: TechProps[];
};
export const Project = ({ className, image, title, tech }: ProjectProps) => {
  const screenType = useScreenType();
  return (
    <>
      {screenType === "desktop" ? (
        <div className="project">
          <h3 className={className === "odd" ? "" : "text-right"}>{title}</h3>
          <div className="project-content-container">
            <ProjectImage image={image} className={className} />
            <ProjectDescription className={className} />
            <TechUsed className={className} tech={tech} />
          </div>
        </div>
      ) : (
        <Card variant="outlined" className="project-card">
          <CardMedia
            src={image}
            title="Contemplative Reptile"
            style={{ height: "70%" }}
            component="img"
          />
          <CardContent className="card-content">
            <h1 className="text-center mb-3 project-title">{title}</h1>
            <TechUsed tech={tech} />
          </CardContent>
        </Card>
      )}
    </>
  );
};
