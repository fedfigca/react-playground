import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CssBaseline from '@mui/material/CssBaseline';

import './App.css'

function App() {
  const appContainer = useRef(null);

  useEffect(() => {
    /**
     * Fade in the entire app to make it
     * easy on the eyes and encourage exploration
     */
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

    </div>
  )
}

export default App
