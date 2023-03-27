import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

import { Observation } from '../resources/inaturalistDataTypes'
import { getObservations } from '../resources/data-service'
import InsectCard from './insectCard';

import './highlights.scss'

function highlights() {
  const [observations, setObservations] = useState<Observation[]>([]);

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
    <section className="igalore__higlights">
      {observations.map((observation, index) => (
        <InsectCard key={observation.id} observation={observation}></InsectCard>
      ))}
    </section>
  )
}

export default highlights
