import { Observation } from '../resources/inaturalistDataTypes'

import './insectPicture.scss'

function insectPicture({observation}: {observation: Observation}) {

  return (
    <div className="igalore__picture">
      <img className='igalore__picture--image' src={observation.photos![0].medium_url || undefined} alt={observation.species_guess || undefined} />
      <div className="igalore__picture--info">
        <h4 className="igalore__picture--title">{observation.species_guess || 'Unknown species'}</h4>
        <p className="igalore__picture--location">{observation.place_guess || 'Unknown location'}</p>
      </div>
    </div>
  )
}

export default insectPicture
