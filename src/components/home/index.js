import SearchBar from '../search-bar'
import SegmentedControl from '../segmented-control'
import MovieList from '../movie-list'

import styles from './home.scss'
import { useState } from 'react'

const Home = () => {
  const [viewType, setViewType] = useState('grid')
  const [category, setCategory] = useState('now_playing')

  const toggleCategory = (elm) => {
    setCategory(elm.target.defaultValue)
  }

  return (
    <div className={styles.container}>
      <SearchBar />
      <SegmentedControl
        viewType={viewType}
        toggleViewType={setViewType}
        category={category}
        toggleCategory={toggleCategory}
      />
      <MovieList viewType={viewType} category={category} />
    </div>
  )
}

export default Home