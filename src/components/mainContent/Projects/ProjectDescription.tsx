import { Paper } from "@material-ui/core";

export type ProjectDescriptionProps = {
  className?: string;
};
export const ProjectDescription = ({ className }: ProjectDescriptionProps) => {
  return (
    <Paper
      elevation={5}
      variant="elevation"
      className={`project-description text-white ${className}`}
    >
      {" "}
      gskdghas;dgh sadgh wgoihw g;oia;lskhdg; aksdgh sdgasldkgh asg asdjg dgh o
      ahdg laksdhglasdjg N SEAG KSDHGAWGOI
    </Paper>
  );
};
