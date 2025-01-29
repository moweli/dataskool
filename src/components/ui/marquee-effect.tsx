"use client";

// import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

type MarqueeAnimationProps = {
  children: string;
  className?: string;
  direction?: "left" | "right";
  baseVelocity: number;
};

function MarqueeAnimation({
  children,
  className,
  direction = "left",
  baseVelocity = 0.5,
}: MarqueeAnimationProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    if (direction === "left") {
      moveBy *= -1;
    } else if (direction === "right") {
      moveBy *= 1;
    }

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className={cn("flex w-fit whitespace-nowrap", className)}
        style={{ x }}>
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-8 text-4xl font-bold">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export { MarqueeAnimation };
