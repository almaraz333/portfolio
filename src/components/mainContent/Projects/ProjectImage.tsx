export type ProjectImageProps = {
  className?: string;
  image: string;
};
export const ProjectImage = ({ className, image }: ProjectImageProps) => {
  return (
    <img
      className={`project-image ${className}`}
      src={image}
      alt="logo, upside down triangle with C"
      height="575"
      width="750"
    />
  );
};
