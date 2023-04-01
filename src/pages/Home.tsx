import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Container, Typography } from '@mui/material';

import './Home.scss'
import Highlights from '../components/highlights'
import Orders from '../components/orders';

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
    <Container ref={homeContainer}>
      <section className='igalore__hero'>
        <Typography gutterBottom variant="h3" component="h1" className='igalore__hero-header'>
          Highlights
        </Typography>
      </section>

      <Highlights />

      <Orders />

    </Container>
  )
}

export default Home
