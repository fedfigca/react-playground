import { ElementRef, useEffect, useRef, useState } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { gsap } from 'gsap'
import { Observation } from '../resources/inaturalistDataTypes'
import { getObservations } from '../resources/data-service'

import './insectCard.scss'


function insectCard() {
  const [observations, setObservations] = useState<Observation[]>([]);
  const cardRefs = useRef<ElementRef<'div'>[]>([]);

  const timeline:GSAPTimeline = gsap.timeline()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getObservations()
        setObservations(data);
        gsap.fromTo('.igalore__card', {
          opacity: 0,
          scale: 0.4
        }, {
          opacity: 1,
          scale: 1,
          stagger: 0.5
        })
      } catch (error) {
        console.log(error)
        return error
      }
    }

    fetchData()
  }, [])

  return (
    <div className='igalore__icard-list igalore__icard-list--highlights'>
    {observations.map((observation, index) => (
      <Card
        sx={{ maxWidth: 345 }}
        key={observation.id}
        className="igalore__card"
        id={`igalore__icard--${index+1}`}>
        { observation.observation_photos_count! > 0 ?
          <CardMedia
            sx={{ height: 210 }}
            image={observation.photos[0].small_url || undefined}
            title="Idalus crinis"
          />
          : ''}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {observation.species_guess}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {observation.taxon?.name}
          </Typography>
        </CardContent>
      </Card>
    ))}
    </div>
  )
}

export default insectCard
