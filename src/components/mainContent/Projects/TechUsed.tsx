export type TechUsedProps = {
  className?: string;
};

export const TechUsed = ({ className }: TechUsedProps) => {
  return (
    <div className={`text-white tech-used flex flex-col ${className}`}>
      <div className="flex items-center">
        <h4 className="mr-2">React</h4> <h4>IMAGE</h4>
      </div>
      <div className="flex items-center">
        <h4 className="mr-2">React</h4> <h4>IMAGE</h4>
      </div>
      <div className="flex items-center">
        <h4 className="mr-2">React</h4> <h4>IMAGE</h4>
      </div>
    </div>
  );
};
