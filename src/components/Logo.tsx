import logo from "../images/logo.png";

export const Logo = () => {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="logo, upside down triangle with C"
        height="50"
        width="60"
      />
    </div>
  );
};
