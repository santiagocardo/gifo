import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  
  return data
}

const getTrendingGifs = () => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

export default getTrendingGifs
