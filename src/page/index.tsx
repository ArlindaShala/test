import React from 'react'
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import Projects from "../components/projects"
import SoftwareEngineer from '../components/softwareEngineer'
import FullPageScroll from '../components/fullPageScroll'
export default function index() {
  return (
    <div>
       <SoftwareEngineer />
        {/* <AboutMe /> */}
         <Skills />
       <Projects /> 
        {/* <FullPageScroll /> */}
    </div>
  )
}
