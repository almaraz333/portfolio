import { TechProps } from "./Projects";

export type TechUsedProps = {
  className?: string;
  tech: TechProps[];
};

export const TechUsed = ({ className, tech }: TechUsedProps) => {
  return (
    <div className={`tech-used flex flex-col ${className}`}>
      <h3 className="mt-3 mb-4">Technology Used: </h3>
      <div className="flex techs">
        <div className="flex tech">
          {tech.map((tech) => (
            <>
              <h4 className="mr-1 text-white">{tech.tech}</h4>
              <img
                src={tech.image}
                height={20}
                width={30}
                alt={`${tech.tech} logo`}
                className="mr-5"
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
