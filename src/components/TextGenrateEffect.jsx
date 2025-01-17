"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const animationDone = useRef(false);

  useEffect(() => {
    if (isInView && !animationDone.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          duration: 0.5,
          delay: (index) => index * 0.2,
        }
      );
      animationDone.current = true;
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.split(" ").map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: "blur(8px)",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

