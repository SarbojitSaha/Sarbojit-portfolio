import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineData } from '../constants';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const EduAndExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations only once when visible

  return (
    <motion.div
      ref={ref}
      className="px-6 py-16"
      id="experience"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-5">
        Education and Experience
      </h1>
      <div className="h-1 w-22 mb-8 bg-white"></div>

      <div className="relative">
        {/* Central Timeline Line */}
        <motion.div
          className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"
          variants={itemVariants}
        ></motion.div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-10 flex items-center ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
            variants={itemVariants}
          >
            {/* Timeline Content */}
            <div className="w-1/2 px-4">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.title} {item.project && `- ${item.project}`}
                </h3>
                {item.institution && (
                  <p className="text-sm font-medium text-gray-500">
                    {item.institution}
                  </p>
                )}
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            </div>

            {/* Timeline Marker */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-blue-500 w-3 h-3 rounded-full border border-white"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EduAndExperience;





