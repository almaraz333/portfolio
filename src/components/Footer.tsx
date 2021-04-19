import Github from "../images/github.png";
export const Footer = () => {
  return (
    <div className="footer text-white text-opacity-70 flex flex-col items-center">
      <h5>Designed and Created by Colton Almaraz</h5>
      <a href="https://github.com/almaraz333/updated-portfolio">
        <img
          src={Github}
          alt="github logo"
          height={30}
          width={30}
          className="mt-2"
        />
      </a>
    </div>
  );
};
