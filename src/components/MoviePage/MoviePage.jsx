import React from 'react'
import Review from '../Review/Review'

const MoviePage = ({moviesData, selectedMovieId}) => {

    const selectedMovie = moviesData.find(movie => movie.id == selectedMovieId)
    const {id, title, synopsis, img, year, duration, genre, avg_rating, reviews} = selectedMovie


  return (
    <div id={id}>
    <img src={img}></img>
      <h1>{title}</h1>
      <p>{avg_rating}</p>
      <p>{genre}</p>
      <p>{synopsis}</p>
      <p>{year}</p>
      <p>{duration}</p>
      {
        reviews.map(review => (
            <Review key={review.id} id={review.id} description={review.description} user={review.user} comments={review.comments}/>
        ))
      }
    </div>
  )
}

export default MoviePage