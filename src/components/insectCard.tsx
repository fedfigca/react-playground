import { Card, CardMedia, CardContent, List, ListItem, ListItemText } from '@mui/material'
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
          : ''}
        <CardContent>
          <List className="igalore__card--datalist">
            <ListItem disablePadding className="igalore__card--datalist-item">
              <ListItemText>Scientific Name: {observation.taxon!.name} (level: {observation.taxon!.rank})</ListItemText>
            </ListItem>
            {observation.taxon!.common_name ? <ListItem disablePadding className="igalore__card--datalist-item">
              <ListItemText>Common Name: {observation.taxon!.common_name.name}</ListItemText>
            </ListItem> : null}
            <ListItem disablePadding className="igalore__card--datalist-item">
              <ListItemText>Observed on: {observation.observed_on_string}</ListItemText>
            </ListItem>
            <ListItem disablePadding className="igalore__card--datalist-item">
              <ListItemText>Observed at: {observation.place_guess}</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
  )
}

export default insectCard
