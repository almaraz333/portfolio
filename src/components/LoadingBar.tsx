import LinearProgress from "@material-ui/core/LinearProgress";
import { useEffect, useRef, useState } from "react";

import { useSetRecoilState } from "recoil";
import { showLoadingScreenState } from "../atoms";

export const LoadingBar = () => {
  const [progress, setProgress] = useState(50);
  const [buffer, setBuffer] = useState(10);

  const setShowLoadingScreen = useSetRecoilState(showLoadingScreenState);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
        setShowLoadingScreen(false);
      } else {
        const diff = Math.random() * 25;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
  );
};
