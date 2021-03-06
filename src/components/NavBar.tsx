import { Button } from "@material-ui/core";
import { Logo } from "./Logo";
import Pdf from "../Assets/AlmarazColton_resume.pdf";
import { animated, useTrail } from "react-spring";

export const NavBar = () => {
  const items = [
    <div className="pl-8">
      <Logo />
    </div>,
    <div className="links">
      <h3 className="text-primary font-normal text-sm px-5">
        00.{" "}
        <span className="text-white text-base">
          <a href="#About">About</a>
        </span>
      </h3>
      <h3 className="text-primary font-normal text-sm px-5">
        01.{" "}
        <span className="text-white text-base">
          <a href="#Projects">Projects</a>
        </span>
      </h3>
      <h3 className="text-primary font-normal text-sm px-5">
        02.{" "}
        <span className="text-white text-base">
          <a href="#Contact">Contact</a>
        </span>
      </h3>
      <Button
        variant="outlined"
        color="primary"
        className="button px-5 "
        href={Pdf}
        target="_blank"
      >
        Resume
      </Button>
    </div>,
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translate3d(0, -100%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <div className="nav">
      {trail.map(({ ...style }, index) => (
        <animated.div style={style}>{items[index]}</animated.div>
      ))}
    </div>
  );
};
