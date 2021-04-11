import Cat from "../../../images/ya.png";

export type ProjectImageProps = {
  className?: string;
};
export const ProjectImage = ({ className }: ProjectImageProps) => {
  return (
    <img
      className={`project-image ${className}`}
      src={Cat}
      alt="logo, upside down triangle with C"
      height="575"
      width="750"
    />
  );
};
