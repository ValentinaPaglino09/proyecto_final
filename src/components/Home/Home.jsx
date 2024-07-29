import React from 'react'
import style from './Home.module.css'
import Movie from '../Movie/Movie'

const Home = ({moviesData, setSelectedMovie}) => {
  return (
   <div className={style.container}>
    {
      moviesData.map(movie => (
        <Movie selectMovie={setSelectedMovie} key={movie.id} id={movie.id} img={movie.img} title={movie.title}  avg_rating={movie.avg_rating} genre={movie.genre} />
      ))
    }
   </div>
  )
}

export default Home