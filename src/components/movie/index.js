import { useSelector } from "react-redux"
import { selectMovieById } from "../../redux/movies-selector"
import { useNavigate  } from "react-router-dom"
import styles from './movie.scss'
import { IMAGE_BASE_URL, POSTER_WIDTH } from "../../utils/fetch"


const Movie = ({ id, loadMoreRef }) => {
  const movieInfo = useSelector((state) => selectMovieById({
    state,
    id,
  }))
  const navigate = useNavigate();
  const redirectPage = () => {
    navigate(`${id}/detail`)
  }

  return (
    <div className={styles.container} ref={loadMoreRef} onClick={redirectPage}>
      <img className={styles.poster} src={`${IMAGE_BASE_URL}/${POSTER_WIDTH}/${movieInfo.poster_path}`}/>
      <span className={styles.voteAverage}>{movieInfo.vote_average}</span>
      <div className={styles.groupElm}>
        <span className={styles.title}>{movieInfo.title}</span>
        <span className={styles.releaseDate}>{movieInfo.release_date}</span>
      </div>
      <span className={styles.overview}>OVERVIEW: {movieInfo.overview}</span>
      <img className={styles.backdrop} src={`${IMAGE_BASE_URL}/${POSTER_WIDTH}/${movieInfo.backdrop_path}`} />
    </div>
  )
}

export default Movie