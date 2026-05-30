"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

const Skiper34 = () => {
  const vertMargin = 10;
  const container = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(0); // Changed from Infinity to 0

  const filter = useMotionValue(0);
  // Remove filter2, add negateFilter
  const negateFilter = useTransform(filter, (value) => -value);

  const { scrollY } = useScroll({
    target: container,
  });
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView, scrollY]);

  useEffect(() => {
    const handleChange = (scrollYValue) => {
      let animationValue = 1;
      if (scrollYValue > maxScrollY) {
        animationValue = Math.max(0, 1 - (scrollYValue - maxScrollY) / 10000);
      }

      scale.set(animationValue);
      filter.set((1 - animationValue) * 100);
    };

    const unsubscribe = scrollY.on("change", handleChange);
    return unsubscribe;
  }, [scrollY, maxScrollY, scale, filter]);

  return (
    <ReactLenis root>
      <section
        className="relative flex w-screen flex-col items-center gap-[10vh] px-4 pt-[50vh]">
        <div
          className="absolute left-1/2 top-24 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span
            className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          scroll down to see effect
        </span>
        </div>
        {images.map((img, idx) => (
          <StickyCard_003 key={idx} imgUrl={img} />
        ))}
      </section>
    </ReactLenis>
  );
};

const StickyCard_003 = ({ imgUrl }) => {
  const vertMargin = 10;
  const container = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(0); // Changed from Infinity to 0

  const filter = useMotionValue(0);
  // Remove filter2, add negateFilter
  const negateFilter = useTransform(filter, (value) => -value);

  const { scrollY } = useScroll({
    target: container,
  });
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView, scrollY]);

  useEffect(() => {
    const handleChange = (scrollYValue) => {
      let animationValue = 1;
      if (scrollYValue > maxScrollY) {
        animationValue = Math.max(0, 1 - (scrollYValue - maxScrollY) / 10000);
      }

      scale.set(animationValue);
      filter.set((1 - animationValue) * 100);
    };

    const unsubscribe = scrollY.on("change", handleChange);
    return unsubscribe;
  }, [scrollY, maxScrollY, scale, filter]);

  return (
    <motion.div
      ref={container}
      className="rounded-4xl sticky h-[200px] w-full max-w-4xl overflow-hidden bg-neutral-200"
      style={{
        scale: scale,
        rotate: filter,
        height: `${100 - 2 * vertMargin}vh`,
        top: `${vertMargin}vh`,
      }}>
      <motion.img
        src={imgUrl}
        alt={imgUrl}
        style={{
          rotate: negateFilter,
        }}
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};

export { Skiper34, StickyCard_003 };

/**
 * Skiper 34 StickyCard_003 �?" React + framer motion + lenis
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */