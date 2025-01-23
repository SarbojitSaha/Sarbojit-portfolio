import React from 'react'
import Hero from './components/Hero'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import EduAndExperience from './components/EduAndExperience'

const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
       <BlurBackground/>
       <Navbar/>
       <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <EduAndExperience/>
        <Contact/>
        
       </main>
       
    </div>
      
    
  )
}

export default App

