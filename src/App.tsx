import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Index from './page/index'
// import SizeObserver from './components/iconSkillsAnimation'
function App() {

  return (
    <>
    {/* <SizeObserver> */}
     <Index />
     {/* </SizeObserver> */}
    </>
  )
}

export default App
