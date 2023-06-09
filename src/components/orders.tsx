import React, { useContext, useEffect, useState } from 'react'
import { Paper, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ObservationsContext } from '../resources/data-service'
import { Observation } from '../resources/inaturalist-data-types'
import './orders.scss'

enum orders {
  /**
   * Order IDs from iNaturalist's site
   * We handle only Hymenoptera for now
   */
  'HYMENOPTERA' = 47201,
}

/**
 *
 * @returns {React.ReactNode} A list of observations
 * of the Hymenoptera Order
 */
function Orders() {
  const navigate = useNavigate()
  const { observations } = useContext(ObservationsContext)
  const [ hymenoptera, setHymenoptera ] = useState<Observation[]>([])

  const filterByOrder = (order: number): Observation[] => {
    return observations.filter((item) => item.taxon?.ancestry?.includes(order.toString()))
  }

  useEffect(() => {
    setHymenoptera(filterByOrder(orders.HYMENOPTERA))
  }, [observations])

  function navigateToInsect(id: number) {
    navigate(`/insect/${id}`)
  }

  return (
    <section className='igalore__wasps'>
      <Typography className='igalore__wasps-title' variant='h3'>Wasps, Bees, Ants and Sawflies</Typography>

      <Paper className='igalore__wasp-hymenoptera' elevation={3}>
        <List
          sx={{width: '100%', maxWidth: 450}}
          dense
        >
          {hymenoptera.map((insect, index) => (
            <React.Fragment key={insect.id}>
              {index > 0 ? <Divider /> : ''}
              <ListItem className='igalore__wasp-item' onClick={() => navigateToInsect(insect.id!)}>
                <ListItemAvatar>
                  <Avatar src={insect.photos![0].square_url || ''} />
                </ListItemAvatar>
                <ListItemText primary={insect.species_guess} secondary={`${insect.observation_photos_count} photos`} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </section>
  )
}

export default Orders
