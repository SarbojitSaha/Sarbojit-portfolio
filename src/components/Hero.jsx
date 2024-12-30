import React from 'react'
import {motion} from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import sarbojit from "../assets/pic.jpeg"
const textVariants={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0,transition:{duration:1,ease:"easeOut"}}
}
const containerVariants={
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.3,
        }
    }
}
const imageVariants={
    hidden:{clipPath:"inset(0 50% 0 50%)"},
    visible:{
        clipPath:"inset(0 0% 0 0%)",
        transition:{
            duration:1.2,
            ease:"easeInOut"
        }
    }
}



const Hero = () => {
  return (
   <div>
     <div className='relative z-10 min-h-full flex flex-wrap flex-col md:flex-row items-center justify-center text-white'>
        <motion.div 
        className='w-full md:w-1/2 p-8 pt-16'
        initial='hidden'
        animate='visible'
        variants={containerVariants}>
            <motion.h1
            className='text-2xl md:text-3xl lg:text-5xl py-4'
            variants={textVariants}>
                {HERO_CONTENT.greeting}
            </motion.h1>
            <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
            >
                {HERO_CONTENT.introduction}
            </motion.p>
            <motion.p
            className="text-xl md:text-2xl lg:text-4xl"
            variants={textVariants}
            >
                {HERO_CONTENT.description}
            </motion.p>
            <motion.a
                className="bg-stone-50 text-stone-900 p-3 lg:p-4
                mt-8 inline-block rounded-2xl"
                href={HERO_CONTENT.resumeLink}
                download
                rel='noopener noreferrer'
                target='_blank'
                variants={textVariants}
            >
                {HERO_CONTENT.resumeLinkText}
            </motion.a>
        </motion.div>
        <motion.div 
        className='w-full md:w-1/2 p-8 pt-20'
        initial='hidden'
        animate="visible"
        variants={imageVariants}>
            <img src={sarbojit} alt="Sarbojit" 
             className='rounded-3xl h-[550px] w-[650px]' />
        </motion.div>
     </div>
   </div>
  )
}

export default Hero
