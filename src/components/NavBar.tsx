import { Button } from "@material-ui/core";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <div className="nav">
      <div className="pl-8">
        <Logo />
      </div>
      <div className="links">
        <h3 className="text-primary font-normal text-sm px-5">
          00.{" "}
          <span className="text-white text-base">
            <a href="#about">About</a>
          </span>
        </h3>
        <h3 className="text-primary font-normal text-sm px-5">
          01. <span className="text-white text-base">Projects</span>
        </h3>
        <h3 className="text-primary font-normal text-sm px-5">
          02. <span className="text-white text-base">Contact</span>
        </h3>
        <Button variant="outlined" color="primary" className="button px-5 ">
          Resume
        </Button>
      </div>
    </div>
  );
};
