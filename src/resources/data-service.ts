import { Observation } from "./inaturalist-data-types"

type JSONResponse = {
  data?: Observation | Observation[]
  errors?: Array<{ message: string }>
}

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
