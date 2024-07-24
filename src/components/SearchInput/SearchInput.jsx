import React from 'react'
import "./SearchInput.css"


const SearchInput = ({searchInputvalue,handleChange}) => {
    return (
        <div className='search-input-container'>
            <input onChange={handleChange} type="text" placeholder='Search here...' />
            <button>
                <img width="32px" height='32px' style={{ objectFit: 'contain' }} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="" />
            </button>
        </div>
    )
}

export default SearchInput;