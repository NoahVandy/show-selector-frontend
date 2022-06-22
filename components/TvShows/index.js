import { useRouter } from "next/router"

import Button from "../../components/UI/Button"

export default function TvShows({ tvShows }) {
  console.log(tvShows)
  const router = useRouter()

  return (
    <>
      {tvShows?.map((tvShow) => (
        <div key={tvShow.id}>
          <h2 onClickCapture={() => router.push(`/tvshows/${tvShow.id}`)}>
            {tvShow.name}
          </h2>
          <p>{tvShow.overview}</p>
          {/* <Button onClick={saveShow}>Click me!</Button> */}
        </div>
      ))}
    </>
  )
}
