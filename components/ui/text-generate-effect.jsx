"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="text-gray-400 opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold sm:text-justify bg-gray-900 p-7 lg:p-48", className)}>
        <h1 className="text-white text-center text-4xl lg:text-6xl mb-12 leading-snug tracking-wide">Did You Know ?</h1>
      <div className="mt-4">
        <div
          className=" text-white text-3xl lg:text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};