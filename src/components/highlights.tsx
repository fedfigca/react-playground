import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

import { Observation } from '../resources/inaturalistDataTypes'
import { getObservations } from '../resources/data-service'
import FlipCard from './flipCard'
import InsectCard from './insectCard'
import InsectPicture from './insectPicture'

import './highlights.scss'

function highlights() {
  const [highlights, setHighlights] = useState<Observation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getObservations()
        if (data.length > 6) {
          data.sort( () => 0.5 - Math.random() )
          setHighlights(data.slice(0, 6))
        } else {
          setHighlights(data);
        }
      } catch (error) {
        console.log(error)
        return error
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    gsap.fromTo('.igalore__flipcard', {
      opacity: 0,
      scale: 0.4
    }, {
      opacity: 1,
      scale: 1,
      stagger: 0.5
    })
  }, [highlights]);

  return (
    <section className="igalore__higlights">
      {highlights.map((observation, index) => (
        <FlipCard key={observation.id}>
          <InsectCard key={`card-${observation.id}`} observation={observation}></InsectCard>
          <InsectPicture key={`picture-${observation.id}`} observation={observation}></InsectPicture>
        </FlipCard>
      ))}
    </section>
  )
}

export default highlights
