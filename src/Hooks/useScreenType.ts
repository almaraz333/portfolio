import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const mid = useMediaQuery({ maxWidth: 1200 });
  const mobile = useMediaQuery({ maxWidth: 900 });

  if (mobile) {
    return "mobile";
  }
  if (mid) {
    return "mid";
  }

  return "desktop";
};
