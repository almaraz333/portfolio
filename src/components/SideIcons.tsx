import Github from "../images/github.png";
import LinkedIn from "../images/linkedin.png";

export const SideIcons = () => {
  return (
    <ul className="side">
      <a href="https://github.com/almaraz333">
        <img
          src={Github}
          alt="github logo"
          height={30}
          width={30}
          className="mb-5"
        />
      </a>
      <a href="https://www.linkedin.com/in/coltonalmaraz/">
        <img
          src={LinkedIn}
          alt="github logo"
          height={30}
          width={30}
          className="mb-5"
        />
      </a>
    </ul>
  );
};
