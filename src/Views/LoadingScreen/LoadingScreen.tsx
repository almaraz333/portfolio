import { LoadingBar } from "../../components/LoadingBar";
import { useSpring, animated } from "react-spring";
import "./styles.scss";

export const LoadingScreen = () => {
  return (
    <div className="bg-background loading-screen">
      <LoadingBar />
    </div>
  );
};
