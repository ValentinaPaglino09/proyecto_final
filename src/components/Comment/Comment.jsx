import React from 'react'

const ReviewComment = ({id, description, user}) => {
  return (
    <div>
      <h2>{user}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ReviewComment