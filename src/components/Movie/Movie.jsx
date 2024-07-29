import React from 'react'
import style from './Movie.module.css'
import Review from '../Review/Review'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({id, img, title, avg_rating, genre, selectMovie}) => {

const navigate = useNavigate()

  return (
    <div id={id} className={style.container} onClick={(e) => {
      e.preventDefault()
      selectMovie(id)
      navigate('/movie')
    }}>
      <img src={img}></img>
      <h1>{title}</h1>
      <p>{avg_rating}</p>
      <p>{genre}</p>
      
    </div>
  )
}

export default MovieCard