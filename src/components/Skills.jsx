import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

 const containerVariants={
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0,
    transition:{duration:1,staggerChildren:0.5,}}
 };

 const itemVariants={
    hidden:{opacity:0,x:-20},
    visible:{opacity:1,x:0,transition:{duration:0.25}}
 };

const Skills = () => {
  return (
    <div className="container px-6 py-16" id="skills">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-5">
        Skills
      </h1>
      <div className="h-1 w-22 mb-8 bg-white"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once:true}}
        className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30">
        
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="py-4 flex items-center justify-between border-b bg-stone-50/30 px-4 rounded-md"
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-xl">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;

