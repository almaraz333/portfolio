import { animated, useTrail } from "react-spring";
import { LoadingBar } from "../../components/LoadingBar";
import "./styles.scss";

export const LoadingScreen = () => {
  const items = [
    "Colton Almaraz",
    "Software Developer",
    "Experience Architect",
  ];
  const trail = useTrail(items.length, {
    from: { opacity: 0, height: 0 },
    to: { opacity: 1, height: 110 },
    // loop: true,
  });
  return (
    <div className="bg-background loading-screen">
      {/* <div className="flex-col align-center flex my-auto p-0">
        {trail.map((animation, index) => (
          <animated.div className="box" style={animation}>
            {items[index]}
          </animated.div>
        ))}
      </div> */}
      <LoadingBar />
    </div>
  );
};
