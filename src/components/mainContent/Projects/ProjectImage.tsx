export type ProjectImageProps = {
  className?: string;
  image: string;
};
export const ProjectImage = ({ className, image }: ProjectImageProps) => {
  return (
    <img
      src={image}
      alt="representing a project"
      height="595"
      width="750"
      className={`project-image ${className}`}
    />
  );
};
