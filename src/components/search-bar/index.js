import styles from './search-bar.scss'

const SearchBar = () => {

  return (
    <div className={styles.container}>
      <input placeholder='Millions of movies can be searched...' type="text" className={styles.searchInput} />
      <button className={styles.searchButton} >Search</button>
    </div>
  )
}

export default SearchBar