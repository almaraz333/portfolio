import { animated, useTrail } from "react-spring";

export const MainTitle = () => {
  const items = [
    <h1 className="text-white name">Colton Almaraz</h1>,

    <h2 className="text-primary sub-name opacity-80 mb-5">
      Software Developer | Experience Architect
    </h2>,
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <div className="main-title">
      {trail.map(({ ...style }, index) => (
        <animated.div style={style}>{items[index]}</animated.div>
      ))}
    </div>
  );
};
