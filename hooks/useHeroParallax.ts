import { useCallback } from "react";
import { useMotionValue } from "framer-motion";

export const useHeroParallax = () => {
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      parallaxX.set(((event.clientX - rect.left) / rect.width - 0.5) * 16);
      parallaxY.set(((event.clientY - rect.top) / rect.height - 0.5) * 12);
    },
    [parallaxX, parallaxY]
  );

  const onMouseLeave = useCallback(() => {
    parallaxX.set(0);
    parallaxY.set(0);
  }, [parallaxX, parallaxY]);

  return { parallaxX, parallaxY, onMouseMove, onMouseLeave };
};

export default useHeroParallax;
