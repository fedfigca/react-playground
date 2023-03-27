import { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
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
          <Typography gutterBottom variant="h5" component="div">
            {observation.species_guess}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {observation.taxon?.name}
          </Typography>
        </CardContent>
      </Card>
  )
}

export default insectCard
