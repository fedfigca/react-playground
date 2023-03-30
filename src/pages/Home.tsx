import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Container, CssBaseline, Typography } from '@mui/material';

import './Home.scss'
import Highlights from '../components/highlights'

function Home() {
  const homeContainer = useRef(null);

  useEffect(() => {
    /**
     * Fade in the entire app to make it
     * easy on the eyes and encourage exploration
     */
    gsap.fromTo(homeContainer.current,
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
    <Container className='igalore' ref={homeContainer}>
      <CssBaseline />

      <section className='igalore__hero'>
        <Typography gutterBottom variant="h1" component="h1" className='igalore__hero-header'>
          Insect Galore!
        </Typography>
      </section>

      <Highlights />

      <section className='igalore__orders'>

      </section>
    </Container>
  )
}

export default Home
