import { Observation } from '../resources/inaturalist-data-types'

import './insect-picture.scss'

function insectPicture({observation}: {observation: Observation}) {
  function createGrade(grade: string) {
    let qualityGrade = {
      description: 'Needs Id',
      classMod: 'needs_id'
    }

    if (grade === 'research') {
      qualityGrade = {
        description: 'Research Quality',
        classMod: grade
      }
    }

    return (
      <span className={`igalore__picture--grade igalore__picture--grade__${qualityGrade.classMod}`}>{qualityGrade.description}</span>
    )
  }

  return (
    <div className="igalore__picture">
      <img className='igalore__picture--image' src={observation.photos![0].medium_url || undefined} alt={observation.species_guess || undefined} />
      {createGrade(observation.quality_grade!)}
      <div className="igalore__picture--info">
        <h4 className="igalore__picture--title">{observation.species_guess || 'Unknown species'}</h4>
        <p className="igalore__picture--location">{observation.place_guess || 'Unknown location'}</p>
      </div>
    </div>
  )
}

export default insectPicture
