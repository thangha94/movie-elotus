import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../../redux/movies-actions"
import { selectMovies, selectLoadMore, selectCurrentPage } from "../../redux/movies-selector"
import Loading from "../loading"
import Movie from "../movie"
import styles from './movie-list.scss'

const MovieList = ({ category, viewType }) => {
  const dispatch = useDispatch()
  const movies = useSelector(selectMovies)
  const observer = useRef()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const loadMore = useSelector(selectLoadMore)
  const currentPage = useSelector(selectCurrentPage)
  // Observe the last element intersect the viewport to load more movies
  const loadMoreMovie = useCallback((node) => {
    if (loading) return
    // remove the previous observed item
    if (observer.current) observer.current.disconnect()
    // set the ref into a new IntersectionObserver
    observer.current = new IntersectionObserver((entries) => {
      // ensure that can load more
      if (entries[0].isIntersecting && loadMore) {
        setPage(pre => pre + 1)
      }
    })
    // Add the element for observing
    if (node) observer.current.observe(node)
  }, [loading, loadMore, category])

  // load more
  useEffect(() => {
    if (page !== 1) {
      setLoading(true)
      dispatch(fetchMovies({
        category,
        page
      }))
    }
  }, [page])

  // init data
  useEffect(() => {
    setPage(1)
    setLoading(true)
    dispatch(fetchMovies({ category }))
  }, [category])

  useEffect(() => {
    if (currentPage === page) setLoading(false)
    if (currentPage === 1) setPage(1)
  }, [currentPage, category])

  return (
    <div className={`${styles.container} ${viewType}-type`} >
      {
        movies.map((item, idx) => {
          if (idx === movies.length - 1) return <Movie loadMoreRef={loadMoreMovie} key={`${item.id}_${idx}`} id={item.id} />
          return <Movie key={item.id} id={item.id} />
        })
      }
      <Loading loading={loading} />
    </div>
  )
}

export default MovieList