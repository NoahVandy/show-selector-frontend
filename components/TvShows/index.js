import { useRouter } from "next/router"

export default function TvShows({ tvShows }) {
  const router = useRouter()

  return (
    <>
      {tvShows?.map((tvShow) => (
        <div key={tvShow.id}>
          <h2 onClickCapture={() => router.push(`/tvshows/${tvShow.id}`)}>
            {tvShow.name}
          </h2>
          <p>{tvShow.overview}</p>
        </div>
      ))}
    </>
  )
}
