import { useContext, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import { ObservationsContext } from '../resources/data-service'
import { Observation } from '../resources/inaturalist-data-types'
import FlipCard from './flip-card'
import InsectCard from './insect-card'
import InsectPicture from './insect-picture'

import './highlights.scss'

function highlights() {
  const { observations } = useContext(ObservationsContext)
  const [ highlights, setHighlights ] = useState<Observation[]>([])

  const highlightRefs = useRef<(HTMLElement | null)[]>([]);
  highlightRefs.current = [];

  const addToRefs = (element: HTMLDivElement) => {

    if (element && !highlightRefs.current.includes(element)) {
      highlightRefs.current.push(element);
    }
  }

  useEffect(() => {
    if (highlightRefs.current.length > 0) {
      gsap.fromTo(highlightRefs.current, {
        opacity: 0,
        scale: 0.4
      }, {
        opacity: 1,
        scale: 1,
        stagger: 0.5
      })
    }
  }, [highlightRefs.current]);

  useEffect(() => {
    const randomItems = observations.sort( () => 0.5 - Math.random() ).slice(0, 6)
    setHighlights(randomItems)
  }, [observations])

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
