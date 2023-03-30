import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import { Observation } from '../resources/inaturalist-data-types'
import { getObservations } from '../resources/data-service'
import FlipCard from './flip-card'
import InsectCard from './insect-card'
import InsectPicture from './insect-picture'

import './highlights.scss'

function highlights() {
  const [highlights, setHighlights] = useState<Observation[]>([]);
  const highlightRefs = useRef<(HTMLElement | null)[]>([]);
  highlightRefs.current = [];

  const addToRefs = (element: HTMLDivElement) => {

    if (element && !highlightRefs.current.includes(element)) {
      highlightRefs.current.push(element);
      console.log(element)
    }
  }

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
    console.log('vez')
  }, [highlightRefs.current]);

  return (
    <section className="igalore__higlights">
      {highlights.map((observation, index) => (
        <div key={observation.id} ref={addToRefs} className="igalore__higlights--item">
          <FlipCard>
            <InsectCard key={`card-${observation.id}`} observation={observation}></InsectCard>
            <InsectPicture key={`picture-${observation.id}`} observation={observation}></InsectPicture>
          </FlipCard>
        </div>
      ))}
    </section>
  )
}

export default highlights
