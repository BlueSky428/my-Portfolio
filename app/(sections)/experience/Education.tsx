"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col my-20 ">
      <div className="max-w-[32rem] flex justify-center items-center mx-auto">
        <motion.ol
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative border-s  border-gray-200 dark:border-gray-700"
        >
          {Data.map((data) => (
            <li key={data.name}>
              <h3 className="flex flex-col md:flex-row mb-2 ml-3 text-lg font-semibold">
                {data.name}
                <Button
                  size="sm"
                  variant="outline"
                  className=" max-w-fit md:ms-3"
                >
                  {data.timeSpan}
                </Button>
              </h3>
              <time className="block ml-3 mb-2 text-base font-normal leading-none text-blue-400-200 ">
                {data.course}
              </time>
            </li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default Education;

const Data = [
  {
    name: "Singapore polytechnic",
    timeSpan: "2020 - 2024",
    course: "Bachelor's Degree in Computer Science",
  }
];
