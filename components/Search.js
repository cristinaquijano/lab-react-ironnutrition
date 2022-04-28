import React, { useState } from 'react'

function Search({handleFilterFood}) {

    const [input, setInput] = useState("")

    const handleSearch = (e) => {
        handleFilterFood(e.target.value)
        setInput(e.target.value)
    }

  return (
    <div className='searchBar'>

        <input
          type='text'
          className='searchBar'
          onChange={handleSearch} 
          placeholder='search...'
          value={input} 
        />

    </div>
  )
}

export default Search