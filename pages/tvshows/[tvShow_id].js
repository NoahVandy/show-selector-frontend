import { useState, useEffect } from "react"

import axios from "axios"
import urls from "../../config/urls"
import api_keys from "../../config/api_keys"

import Button from "../../components/UI/Button"

export async function getServerSideProps(context) {
  const tvShow_id = context.params.tvShow_id

  return {
    props: { tvShow_id },
  }
}

export default function TvShowDetails({ tvShow_id }) {
  const [tvShow, setTvShow] = useState({})

  useEffect(() => {
    const fetchTvShow = async () => {
      const response = await axios.get(
        `${urls.tmdb}/tv/${tvShow_id}?api_key=${api_keys.tmdb}`
      )
      setTvShow(response.data)
    }
    fetchTvShow()
  }, [])

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} />
      {tvShow.name}
      {/* <Button onClick={saveShow}>Click me!</Button> */}
    </div>
  )
}
