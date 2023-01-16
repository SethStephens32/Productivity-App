import React from 'react'
import './SearchBar.styles.scss'
import { useState} from 'react'

const SearchBar = () => {

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div className='searchbar-container'>
        <input type='text' placeholder='Search' />
        <button onClick={handleSearch}>Add</button>
    </div>
  )
}

export default SearchBar