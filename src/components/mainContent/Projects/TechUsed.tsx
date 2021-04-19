import { TechProps } from "./Projects";

export type TechUsedProps = {
  className?: string;
  tech: TechProps[];
};

export const TechUsed = ({ className, tech }: TechUsedProps) => {
  return (
    <div className={`tech-used flex flex-col ${className}`}>
      <h3 className="mb-4">Technology Used: </h3>
      <div className="flex techs">
        <div className="tech">
          {tech.map((tech) => (
            <div className="flex my-1 mx-3">
              <h4 className="mr-1 text-white text-opacity-70">{tech.tech}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
