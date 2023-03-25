import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CssBaseline from '@mui/material/CssBaseline';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const appContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(appContainer.current,
      {
        alpha: 0,
      },
      {
        alpha: 1,
        ease: 'none',
        duration: 0.5,
      }
    )
  }, []);

  return (
    <div className='igalore' ref={appContainer}>
      <CssBaseline />

      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
}

export default App
