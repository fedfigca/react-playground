import { Card, CardMedia, CardContent } from '@mui/material'
import { Observation } from '../resources/inaturalistDataTypes'

import './insectCard.scss'

function insectCard({observation}: {observation: Observation}) {

  return (
    <Card
        sx={{ maxWidth: 345 }}
        className="igalore__card"
        id={`igalore__icard--${observation.id}`}>
        { observation.observation_photos_count! > 0 ?
          <CardMedia
            sx={{ height: 210 }}
            image={observation.photos![0].small_url || undefined}
            title="Idalus crinis"
          />
          : ""}
        <CardContent>
          <ul className="igalore__card--datalist">
            <li className="igalore__card--datalist-item">
              <p className="igalore__card--datalist-text">
                <span className="igalore__card--datalist-label">Scientific Name:</span>
                <span className="igalore__card--datalist-value igalore__card--datalist-value__taxon">{observation.taxon!.name}</span>
                <span className={`igalore__card--datalist-category igalore__card--datalist-category__${observation.taxon!.rank}`}>{observation.taxon!.rank}</span>
              </p>
            </li>
            {observation.taxon!.common_name ? <li className="igalore__card--datalist-item">
              <p className="igalore__card--datalist-text">
                <span className="igalore__card--datalist-label">Common Name:</span>
                <span className="igalore__card--datalist-value">{observation.taxon!.common_name.name}</span>
              </p>
            </li> : null}
            <li className="igalore__card--datalist-item">
              <p className="igalore__card--datalist-text">
                <span className="igalore__card--datalist-label">Observed on:</span>
                <span className="igalore__card--datalist-value">{observation.observed_on_string}</span>
              </p>
            </li>
            <li className="igalore__card--datalist-item">
              <p className="igalore__card--datalist-text">
                <span className="igalore__card--datalist-label">Observed at:</span>
                <span className="igalore__card--datalist-value">{observation.place_guess}</span>
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>
  )
}

export default insectCard
