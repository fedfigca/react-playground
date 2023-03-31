import React, { createContext, useState } from "react"
import { Observation } from "./inaturalist-data-types"

const apiBase = 'https://www.inaturalist.org'

export const getObservations = async (): Promise<Observation[]> => {
  const response = await window.fetch(`${apiBase}/observations.json?place_id=any&taxon_id=47158&user_id=fedecrc&verifiable=any`, {
    method: 'GET'
  }).catch((error) => {
    return Promise.reject(error)
  })

  if (response.ok) {
    const data: Observation[] = await response.json()
    if (data && data.length > 0) {
       return Promise.resolve(data)
    } else {
      const error = new Error(`${response.status}, ${response.statusText}`)
      return Promise.reject(error)
    }
  } else {
    const error = new Error(`${response.status}, ${response.statusText}`)
    return Promise.reject(error)
  }
}

type ContextProps = {
  observations: Observation[],
  getInsect: Function
}

type WithChildProps = {
  children: JSX.Element
}

export const ObservationsContext = createContext({
  observations: [],
  getInsect: () => undefined
} as ContextProps)

export const ObservationsProvider = ({ children }: WithChildProps) => {
  const [ observationsList, setObservationList ] = useState<Observation[]>([]);

  const fetchData = async () => {
    try {
      const data = await getObservations()
      setObservationList(data)
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const getInsect = (id: number) => {
    const insect = observationsList.find((item) => {
      return item.id === id
    })

    if (insect) {
      return insect
    } else {
      return new Error('No insect found')
    }
  }

  if (observationsList.length < 30) {
    fetchData()
  }

  return (
    <ObservationsContext.Provider value={{observations: observationsList, getInsect}}>
      {children}
    </ObservationsContext.Provider>
  )
}
