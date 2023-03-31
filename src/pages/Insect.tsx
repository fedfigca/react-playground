import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap'
import { Container, Typography, Paper, CircularProgress, ImageList, ImageListItem, Modal, Box } from '@mui/material';

import { Observation, Photo } from '../resources/inaturalist-data-types';
import { ObservationsContext } from '../resources/data-service';
import './Insect.scss'

type routeParams = {
  id: string
}

function Insect() {
  const insectContainer = useRef(null)
  const { id } = useParams<routeParams>()
  const { observations, getInsect } = useContext(ObservationsContext)
  const [ modalOpts, setModalOpts ] = useState({
    isOpen: false,
    url: ''
  });

  const [ insect, setInsect ] = useState<Observation>({id: -1})

  const insectId = parseInt(id as string)

  useEffect(() => {
    if (observations.length === 30 && !isNaN(insectId)) {
      try {
        setInsect(getInsect(insectId));
      } catch(error) {
        console.log(error);
      }
    }
  }, [observations])

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

  function openModal(photo: Photo) {
    setModalOpts({
      isOpen: true,
      url: photo.large_url || ''
    })
  }

  function closeModal() {
    setModalOpts({
      isOpen: false,
      url: ''
    })
  }

  return (
    <Container className='igalore__insect' ref={insectContainer}>
      <Paper className='igalore__insect--data' elevation={6}>
        { insect.id === -1 ?
          <CircularProgress></CircularProgress>
          :
          <>
            <div className="igalore__insect--info-box">
              <Typography variant="h3" gutterBottom={false}>
                <span className="igalore__sci-name">{insect.taxon?.common_name?.name || insect.taxon?.name} </span>
                {insect.taxon?.rank === 'species' ? '' : <span className="igalore__sci-name-complement">sp.</span> }
              </Typography>

              <Typography variant="body2">
                Observed at {insect.place_guess} on { insect.observed_on?.toString() }
              </Typography>
            </div>

            {insect.uri !== undefined ? <Typography variant='body1'><p>View the full iNaturalist observation <a target='blank' href={insect.uri || ''}>Here</a></p></Typography> : ''}

            <ImageList variant='quilted' cols={4}>
              {insect.photos!.map((photo) => (
                <ImageListItem key={photo.id} cols={(Math.floor(Math.random() * 3))} rows={(Math.floor(Math.random() * 2))} onClick={() => openModal(photo)}>
                  <img src={photo.medium_url || ''} alt={insect.species_guess || ''} loading='lazy'/>
                </ImageListItem>
              ))}
            </ImageList>
          </>
        }
      </Paper>

      <Modal
        open={modalOpts.isOpen}
        onClose={closeModal}
      >
        <img className='igalore__insect-image__fullscreen' src={modalOpts.url} alt="Insect Image" />
      </Modal>
    </Container>
  )
}

export default Insect
