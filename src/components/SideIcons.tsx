import { animated, useTrail } from "react-spring";
import Github from "../images/github.png";
import LinkedIn from "../images/linkedin.png";

export const SideIcons = () => {
  const items = [
    <a href="https://github.com/almaraz333">
      <img
        src={Github}
        alt="github logo"
        height={30}
        width={30}
        className="mb-5"
      />
    </a>,
    <a href="https://www.linkedin.com/in/coltonalmaraz/">
      <img
        src={LinkedIn}
        alt="linked in logo"
        height={30}
        width={35}
        className="mb-5"
      />
    </a>,
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <ul className="side">
      {trail.map(({ ...style }, index) => (
        <animated.div style={style}>{items[index]}</animated.div>
      ))}
    </ul>
  );
};
