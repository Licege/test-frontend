import React from 'react'
import { Button } from 'react-bootstrap'
import '../styles/search_bar.css'

export const SearchBar = ({ placeholder = '' }) => (
    <div className='search_bar mb-3'>
        <input className='search_bar__input'
               placeholder={placeholder}
        />
        <Button variant='secondary'>Искать</Button>
    </div>
)
