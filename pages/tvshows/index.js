import { useState, useEffect } from "react"
import axios from "axios"
import urls from "../../config/urls"
import api_keys from "../../config/api_keys"

import TvShowsView from "../../components/TvShows"

export default function TvShows() {
  const [tvShows, setTvShows] = useState([])

  const fetchTvShows = async () => {
    const response = await axios.get(
      `${urls.tmdb}/tv/top_rated?api_key=${api_keys.tmdb}`
    )
    setTvShows(response.data.results)
  }

  useEffect(() => {
    fetchTvShows()
  }, [])

  return <TvShowsView tvShows={tvShows} />
}
