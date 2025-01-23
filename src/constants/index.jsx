import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMongodb, SiBootstrap, SiCplusplus,SiMysql,SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
export const NAVIGATION_LINKS = [
        
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there!",
  introduction:
    "I'm Sarbojit Saha, a passionate frontend developer, designing engaging and user-friendly web experiences.",
  description:
    "Final-year B.Tech student at Heritage Institute of Technology | Frontend Web Developer | UI/UX Enthusiast",
  resumeLinkText: "Download Resume",
  resumeLink: "/Resume.pdf",
};

export const ABOUT_CONTENT = {
  paragraphs: [
    "Hello! I'm Sarbojit Saha, a passionate final-year student pursuing a degree in Electronics and Communication Engineering at the Heritage Institute of Technology.",
    "From a young age, my love for painting and crafts nurtured my creativity. As an aspiring engineer, I found the perfect blend of creativity and technicality in full-stack web development, where technology becomes a canvas for impactful and meaningful creations that can positively impact users' lives.",
    "In my journey, I've already achieved proficiency in frontend development and mastered HTML,CSS, JavaScript & React.js, giving me the skills to create responsive and engaging user interfaces. Currently, I'm channeling my energy into exploring the backend world, diving into Node.js and MongoDB, and learning Express.js to build robust server-side applications.",
    "I believe technology drives innovation and offers endless possibilities. If you're passionate about creativity, technology, or collaboration, feel free to connect—let's create something amazing together!",
  ],
};


export const PROJECTS = [
  {
    name: "MeetUp.",
    description: "A fully responsive video conferencing webapp using the MERN stack and ZegoCloud API, featuring real-time audio/video communication, text chat, screen sharing, and JWT-based authentication. Includes a dynamic admin panel .",
    image: project1,
    link: "https://github.com/SarbojitSaha/video_conference",
    live:"https://meetup-zeta-vert.vercel.app/",
  },
  {
    name: "EduConnect",
    description: "EduConnect is a project management web app where students can upload and view projects, featuring dedicated dashboards for both students and colleges.",
    image: project2,
    link: "https://github.com/SarbojitSaha/EduConnect",
    live:"https://edu-connect-jade.vercel.app/"
  },
  {
    name: "Homzy",
    description: "A sleek, responsive real estate platform with intuitive navigation, featuring property listings and interactive functionality for users to add their own properties.",
    image: project3,
    link: "https://github.com/SarbojitSaha/RealEstate2",
    live:"https://real-estate-ss.pages.dev/"
  },

  
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "0.5+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <SiBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "2+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <SiCplusplus className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C/C++ Programming Language",
    experience: "4+ year",
  },
  {
    icon: <DiJava className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Java",
    experience: "0.5+ year",
  },
  {
    icon: <SiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "SQL",
    experience: "1+ year",
  },
];

export const timelineData = [
  {
    date: "February 2019",
    title: "Class 10th Boards",
    institution: "Narmada High School",
    description: "Achieved 91.8% in the West Bengal Board of Secondary Education.",
  },
  {
    date: "2021",
    title: "Class 12th Boards",
    institution: "Narmada High School",
    description: "Achieved 88.8% in the West Bengal Council of Higher Secondary Education.",
  },
  {
    date: "October 2021",
    title: "Started B.Tech in ECE",
    institution: "Heritage Institute of Technology",
    description: "Enrolled in the Electronics and Communication Engineering program.",
  },
  {
    date: "June 2022",
    title: "Started Exploring Web Development",
    description: "Began learning web development technologies and frameworks.",
  },
  {
    date: "July 2023",
    title: "Completed Full Stack Web Development Training",
    institution: "Udemy",
    description: "Completed a comprehensive Full Stack Web Development Bootcamp.",
  },
  {
    date: "August 2023",
    title: "Inter-College Hackathon - Top 30",
    project: "EduConnect",
    description:
      "Participated in an inter-college hackathon and ranked among the top 30 teams. Developed the 'EduConnect' project.",
  },
  {
    date: "June 2024",
    title: "Web Development Internship",
    institution: "Ardent Computech Private Limited",
    description:
      "Completed an internship focusing on web development. Built the 'MeetUp' project, a video conferencing platform.",
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S CREATE SOMETHING EXTRAORDINARY THAT LEAVES A MARK ON THE WORLD!",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "sarbo.jit183@.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/SarbojitSaha",
      ariaLabel: "View my GitHub profile",
      icon: <RiGithubFill className="size-10"/>
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sarbojit-saha-808068248/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: <RiLinkedinFill className="size-10"/>
    },
  ],
  footerText: `© ${new Date().getFullYear()} Sarbojit Saha. All rights reserved.`,
};
