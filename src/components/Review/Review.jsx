import React from 'react'
import style from './Review.module.css'
import ReviewComment from '../Comment/Comment'

const Review = ({id, description, user, rating, comments}) => {
  return (
    <div id={id}>
      <h2>{user ? user : ''}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      {
       comments && comments.map(comment => (
          <ReviewComment key={comment.id} id={comment.id} description={comment.description} user={comment.user}/>
        ))
      }
    </div>
  )
}

export default Review