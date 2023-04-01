import { useContext, useEffect, useState } from 'react'
import { ObservationsContext } from '../resources/data-service'
import { Observation } from '../resources/inaturalist-data-types'
import { Paper, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'

import './orders.scss'

enum orders {
  'HYMENOPTERA' = 47201,
}

function Orders() {
  const { observations } = useContext(ObservationsContext)
  const [ hymenoptera, setHymenoptera ] = useState<Observation[]>([])

  const filterByOrder = (order: number): Observation[] => {
    return observations.filter((item) => item.taxon?.ancestry?.includes(order.toString()))
  }

  useEffect(() => {
    setHymenoptera(filterByOrder(orders.HYMENOPTERA))
  }, [observations])

  return (
    <section className='igalore__wasps'>
      <Typography className='igalore__wasps-title' variant='h2'>Wasps, Bees, Ants and Sawflies</Typography>

      <Paper className='igalore__wasp-hymenoptera' elevation={3}>
        <List
          sx={{width: '100%', maxWidth: 450}}
          dense
        >
          {hymenoptera.map((insect, index) => (
            <>
              {index > 0 ? <Divider /> : ''}
              <ListItem key={insect.id}>
                <ListItemAvatar>
                  <Avatar src={insect.photos![0].square_url || ''} />
                </ListItemAvatar>
                <ListItemText primary={insect.species_guess} secondary={`${insect.observation_photos_count} photos`} />
              </ListItem>
            </>
          ))}
        </List>
      </Paper>
    </section>
  )
}

export default Orders
