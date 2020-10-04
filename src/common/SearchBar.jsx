import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../styles/search_bar.css'

export const SearchBar = ({ onSearch, placeholder = '' }) => {
    const [ value, setValue ] = useState('')

    const setValueHandler = ({ target }) => setValue(target.value)

    const onSearchHandler = () => onSearch(value)

    return (
        <div className='search_bar mb-3'>
            <input className='search_bar__input'
                   value={value}
                   onChange={setValueHandler}
                   placeholder={placeholder}
            />
            <Button variant='secondary' onClick={onSearchHandler}>Искать</Button>
        </div>
    )
}
