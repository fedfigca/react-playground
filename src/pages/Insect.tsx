import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap'
import { Container, Typography } from '@mui/material';

import './Insect.scss'

function Insect() {
  const insectContainer = useRef(null)
  const { id } = useParams<{id: string}>()

  useEffect(() => {
    /**
     * Fade in the entire app to make it
     * easy on the eyes and encourage exploration
     */
    gsap.fromTo(insectContainer.current,
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
    <Container className='igalore' ref={insectContainer}>
      <Typography>
        This is the Insect page, welcome.
        The ID received is {id}
      </Typography>
    </Container>
  )
}

export default Insect
