"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex flex-col my-20 gap-10">
      <div className="max-w-[32rem] flex justify-center items-center mx-auto">
        <motion.ol
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative border-s  border-gray-200 dark:border-gray-700"
        >
          {Data.map((data) => (
            <li className="mb-10 ms-6" key={data.name}>
              <h3 className="flex flex-col md:flex-row mb-2 ml-3 text-lg font-semibold">
                {data.name}
                <Button
                  size="sm"
                  variant="outline"
                  className="max-w-fit md:ms-3"
                >
                  {data.timeSpan}
                </Button>
              </h3>
              <time className="block mb-2 ml-3 text-base font-normal leading-none text-blue-400-200 ">
                {data.role}
                <ul className="list-disc font-sans text-sm mt-3 ml-5 ">
                  <li className="my-1">{data?.about1}</li>
                  <li className="my-1">{data?.about2}</li>
                  <li className="my-1">{data?.about3}</li>
                </ul>
              </time>
            </li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default Experience;

const Data = [
  {
    name: "CSSSR Company",
    timeSpan: "May, 2022 - Dec, 2023",
    role: "Front-End Developer - Remote",
    about1: "Managed front end development of an enterprise-level intranet, empowering over 5,000 employees with improved navigation and interactive features.",
    about2: "Implemented a CSS preprocessor (Sass) workflow that standardised styling across products and increased development efficiency by 15%.",
    about3: "Contributed to the development of a content-rich website for a leading news outlet, enhancing the user experience for over 1 million unique visitors per month.",
  },
  {
    name: "Scalo Company",
    timeSpan: "Apr, 2020 - Feb, 2022",
    role: "Front-End Developer - Remote",
    about1: "Performed code review and bug fixes, reducing technical debt by 70% in the first quarter.",
    about2: "Spearheaded the transition to a React-based front-end, coupled with Redux for state management, which cut down page loading time by 40%.",
    about3: "Pioneered the implementation of automated front-end testing procedures that brought down reported UI bugs by 60%, enhancing overall software quality.",
  },
  {
    name: "Agile Lab Company",
    timeSpan: "Aug, 2018 -Dec, 2019",
    role: "Front-End Developer - Remote",
    about1: "Managed a process re-engineering project to improve and consolidate end-toend service processes; restructured communication flow among10 departments and cut down paperwork by 75%.",
    about2: "Utilized effective debugging tools to identify areas of performance issues, resulting in improvement of client-side scripts by 25%",
    about3: "Reduced repeat work by establishing a coding style and its implementation, resulting in an10% increase in developer performance.",
  },
];
