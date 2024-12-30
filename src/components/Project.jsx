import React from 'react'
import {motion} from "framer-motion"
import { PROJECTS } from '../constants'

const Project = () => {
    const projectVariants={
        hidden:{
            opacity:0,scale:0.8,rotate:-40,y:50
        },
        visible:{
            opacity:1,scale:1,rotate:0,y:0,
            transition:{
                duration:0.6,
                ease:"easeOut",
                type:"spring",
                bounce:0.4,
            }
        }
    }
  return (
    <div className='px-6 py-16 overflow-hidden'  id='projects'>
      <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-6'>Projects</h1>
      <div className='h-1 w--20 mb-8 bg-white'></div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {PROJECTS.map((project,index)=>(
            <motion.div key={index} className='relative rounded-lg overflow-hidden h-[500px] transition-transform group'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            variants={projectVariants}>
                <img src={project.image}
                alt={project.name}
                className='mt-20 absolute opacity-60 w-full h-full object-fill transition-opacity duration-300'/>
                <div className='relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white'>
                    <h2 className='text-2xl font-semibold '>
                    <span className='inline-block bg-stone-800 text-white py-1 px-2 rounded-md'>{project.name}</span>
                    </h2>
                    <div className='flec flex-col justify-between'>
                        <p className='mb-4 flex-grow text-xl opacity-0 group-hover:opacity-100
                         bg-gray-400 transition-opacity duration-300 p-2 rounded-lg'>
                         {project.description}
                        </p>
                        <a href={project.link}
                        target='_blank'
                        rel='noopener norefferer'
                        className='bg-yellow-300 text-stone-900 border border-teal-50 rounded-full py-2 px-2 w-34 text-sm hover:bg-yellow-500 text-center'>
                            View on GitHub
                        </a>
                        <a href={project.live}
                        target='_blank'
                        rel='noopener norefferer'
                        className='bg-green-500 text-stone-900 border border-teal-50 rounded-full m-2 py-2 px-2 w-34 text-sm hover:bg-green-600 text-center'>
                            View Live
                        </a>
                    </div>
                   
                </div>
            </motion.div>
        )) }
      </div>
    </div>
  )
}

export default Project
