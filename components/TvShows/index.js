import { useRouter } from "next/router"

export default function TvShows({ tvShows }) {
  console.log(tvShows)
  const router = useRouter()

  return (
    <>
      {tvShows?.map((tvShow) => (
        <div>
          <h2 onClickCapture={() => router.push(`/tvshows/${tvShow.id}`)}>
            {tvShow.name}
          </h2>
          <p>{tvShow.overview}</p>
        </div>
      ))}
    </>
  )
}
