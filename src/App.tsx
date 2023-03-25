import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Container, CssBaseline, Typography } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material'

import './App.css'

import idalus from './assets/idalus.jpeg'

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
    <Container className='igalore' ref={appContainer}>
      <CssBaseline />

      <section className='igalore__hero'>
        <Typography gutterBottom variant="h1" component="h1" className='igalore__hero-header'>
          Insect Galore!
        </Typography>
      </section>

      <section className='igalore__highlights'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 210 }}
            image={idalus}
            title="Idalus crinis"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Idalus Crinis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Idalus crinis is a moth of the family Erebidae. It was described by Herbert Druce in 1884.
          </Typography>
          </CardContent>
        </Card>
      </section>

      <section className='igalore__orders'>

      </section>
    </Container>
  )
}

export default App
