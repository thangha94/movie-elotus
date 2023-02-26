import { useDispatch } from 'react-redux'
import { fetchMovies } from "../../redux/movies-actions"
import styles from './segmented-control.scss'
import ListIcon from '../../assets/images/list-icon.png'
import GridIcon from '../../assets/images/grid-icon.png'


const SegmentedControl = ({
  category,
  toggleCategory,
  toggleViewType,
}) => {
  const dispatch = useDispatch()

  const reloadPage = () => {
    dispatch(fetchMovies({ category }))
  }

  return (
    <div className={styles.container}>
      <span>MOVIES</span>
      <div className={styles.segmented}>
        <input
          onClick={toggleCategory}
          defaultChecked={category === 'now_playing'}
          type="radio"
          name="category"
          value="now_playing"
          id="now_playing"
        />
        <label htmlFor="now_playing">
          Now Playing
        </label>
        <input
          onClick={toggleCategory}
          defaultChecked={category === 'top_rated'}
          type="radio"
          name="category"
          value="top_rated"
          id="top_rated" />
        <label htmlFor="top_rated">
          Top Rated
        </label>
      </div>
      <button onClick={reloadPage} className={styles.reloadButton}>Reload</button>
      <div className={styles.viewType}>
        <img onClick={() => toggleViewType('list')} src={ListIcon} title="Show Movies as a List" />
        <img onClick={() => toggleViewType('grid')} src={GridIcon} title="Show Movies as a Grid" />
      </div>
    </div>
  )
}

export default SegmentedControl