import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

import { Observation } from '../resources/inaturalistDataTypes'
import { getObservations } from '../resources/data-service'
import FlipCard from './flipCard'
import InsectCard from './insectCard'
import InsectPicture from './insectPicture'

import './highlights.scss'

function highlights() {
  const [observations, setObservations] = useState<Observation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getObservations()
        setObservations(data);
        gsap.fromTo('.igalore__card, .igalore__picture', {
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
    <section className="igalore__higlights">
      {observations.map((observation, index) => (
        <FlipCard>
          <InsectCard key={`card-${observation.id}`} observation={observation}></InsectCard>
          <InsectPicture key={`picture-${observation.id}`} observation={observation}></InsectPicture>
        </FlipCard>
      ))}
    </section>
  )
}

export default highlights
