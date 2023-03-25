import { Observation } from "./inaturalistDataTypes"

type JSONResponse = {
  data?: Observation | Observation[]
  errors?: Array<{ message: string }>
}

const apiBase = 'https://www.inaturalist.org'

export const getObservations = async (): Promise<Observation[]> => {
  const response = await window.fetch(`${apiBase}/observations.json?place_id=any&user_id=fedecrc&verifiable=any`, {
    method: 'GET'
  }).catch((error) => {
    return Promise.reject(error)
  })

  let observations: Observation[] = []

  if (response.ok) {
    const { data, errors }: JSONResponse = await response.json() as { data: Observation[] }
    if (data && data.length > 0) {
       observations = data
       return Promise.resolve(observations)
    } else {
       const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
       return Promise.reject(error)
    }
  } else {
    const error = new Error(`${response.status}, ${response.statusText}`)
    return Promise.reject(error)
  }
}
