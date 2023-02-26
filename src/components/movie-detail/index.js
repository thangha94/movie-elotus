import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailMovie } from "../../apis/movie-api"
import SearchBar from "../search-bar"
import styles from './movie-detail.scss'
import { IMAGE_BASE_URL, POSTER_WIDTH, BACKDROP_WIDTH } from '../../utils/fetch'

const MovieDetail = (props) => {
  const [detail, setDetail] = useState({})
  const params = useParams()

  const initData = async() => {
    const data = await getDetailMovie(params.movieId)
    console.log({
      data
    })
    setDetail(data)
  }

  useEffect(() => {
    initData()
  }, [])

  const getGenres = (genres) => {
    return genres ? genres.reduce((result, item) => {
      return [...result, item.name]
    }, []).join(',') : ''
  }

  return (
    <>
      <SearchBar />
      <div className={styles.container}>
        <img className={styles.backdrop} src={`${IMAGE_BASE_URL}/${BACKDROP_WIDTH}/${detail.backdrop_path}`} />
        <img src={`${IMAGE_BASE_URL}/${POSTER_WIDTH}/${detail.poster_path}`} className={styles.poster} />
        <div className={styles.detail}>
          <span className={styles.title}>{detail.title}</span>
          <div className={styles.generalGroup}>
            <span>{detail.release_date}</span>
            <span className={styles.genres}>{getGenres(detail.genres)}</span>
            <span className={styles.runtime}>{detail.runtime} minutes</span>
          </div>
          <div className={styles.network}>

          </div>
          <span className={styles.tagline}>{detail.tagline}</span>
          <div className={styles.overview}>
            <span className={styles.overviewTitle}>Overview</span>
            <p className={styles.overviewContent}>{detail.overview}</p>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default MovieDetail