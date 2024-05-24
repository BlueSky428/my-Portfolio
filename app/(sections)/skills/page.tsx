"use client";

import React from "react";
import { Frontend, Tools } from "./constant";
import { motion } from "framer-motion";

interface SkillComponents {
  [key: string]: () => JSX.Element;
}

const skillComponents: SkillComponents = {
  Frontend: Frontend,
  Tools: Tools,
};

const data = [
  {
    label: "Frontend",
  },
  {
    label: "Tools",
  },
];

const Skills = () => {
  return (
    <div className="md:py-10">
      <div className="flex flex-col items-center justify-center py-5">
        <p className="font-bold text-3xl">Skills</p>
        <div className="h-[2px] w-20 bg-blue-500 rounded-full my-1"></div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        {data.map(({ label }) => (
          <div key={label} className="flex flex-col m-1">
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xl mt-1"
              >
                {label}
              </motion.span>
              <div className="w-16 h-[1px] bg-blue-500 rounded-full my-1"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap justify-center items-center gap-5"
            >
              {skillComponents[label] && (
                <motion.div>{skillComponents[label]()}</motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
