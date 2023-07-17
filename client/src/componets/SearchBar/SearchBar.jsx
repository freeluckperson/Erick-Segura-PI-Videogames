import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideogameByName } from '../../redux/actions'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getVideogameByName(name))
    setName('')
  }

  return (
    <div className={styles.container}>
      <input type='text' value={name} onChange={(e) => handleInputChange(e)} />
      <button type='submit' onClick={(e) => handleSubmit(e)}> Search </button>
    </div>
  )
}

export default SearchBar



