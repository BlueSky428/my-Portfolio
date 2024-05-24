"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify p-6 md:w-1/2">
        <motion.h1
          className="text-2xl font-bold text-center mt-2 mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I have worked in web development for nearly 7 years as a Front-End Developer.<br/>
          My journey into technology began with a deep-seated love for innovation and creativity, 
          driving me to take the initiative to learn Front-End Web Development.<br/>
          This decision has undoubtedly been one of the most challenging yet amazing choices I’ve ever made.<br/>
          Contributing to web development projects and overcoming both personal and professional challenges have 
          only further motivated me to continue pursuing my career goals within the software development industry.

          Throughout my career, I’ve had the privilege of working on a diverse range of projects, each presenting 
          unique challenges and learning opportunities. These experiences have honed my skills in HTML, CSS, JavaScript, 
          and various frameworks, while also teaching me the importance of user-centered design and responsive development.<br/>
          My commitment to continuous learning has kept me abreast of the latest industry trends and technologies, ensuring 
          that I can deliver modern, efficient, and visually appealing web solutions.<br/>

          This journey has also taught me to believe in myself and to be kind to myself, reminding me that anything is possible 
          with time and dedication. The blend of technical challenges and creative problem-solving is what I find most rewarding 
          in this field.<br/> I am excited about the future and eager to see where this road takes me, embracing each new opportunity 
          with enthusiasm and an open mind.<br/>

          When I’m not on the job, I love hiking with my dog, working my way through every recipe in the family cookbook, 
          and indulging my love for exploring new places.<br/> Whether I’m trekking through the mountains, experimenting with new c
          ulinary techniques, or discovering hidden gems in a new city, I bring the same passion and curiosity to my personal life as 
          I do to my professional endeavors.<br/>
          <br />
        </motion.p>
      </div>
    </div>
  );
}