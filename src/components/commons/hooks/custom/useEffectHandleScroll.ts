import { useEffect } from "react";
import { useSetIsToggle } from "./useSetIsToggle";

export const useEffectHandleScroll = (): boolean => {
  const [isScroll, , setIsScroll] = useSetIsToggle();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (): void => {
    if (window.scrollY >= 90) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  return isScroll;
};
