import { Paper } from "@material-ui/core";
import Github from "../../../images/github.png";

export type ProjectDescriptionProps = {
  className?: string;
  description: string;
  type: "demo" | "repo";
  link: string;
  card?: boolean;
};
export const ProjectDescription = ({
  className,
  description,
  type,
  link,
  card,
}: ProjectDescriptionProps) => {
  const body = (
    <div className="mt-3 flex flex-col justify-between">
      <div>{description}</div>
      <a href={link} className="description-link self-center mt-5 mb-3">
        {type === "demo" ? (
          <h3>Live Demo</h3>
        ) : (
          <img alt="github logo" src={Github} height="50" width="50" />
        )}
      </a>
    </div>
  );
  if (card) {
    return body;
  }
  return (
    <Paper
      elevation={5}
      variant="elevation"
      className={`project-description text-white ${className}`}
    >
      <>{body}</>
    </Paper>
  );
};
