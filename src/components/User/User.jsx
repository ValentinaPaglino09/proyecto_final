import React from 'react'
import style from './User.module.css'

const User = ({id, name, lastName, email, isBanned}) => {
  return (
    <div id={id}>
      <h1>{name + ' ' + lastName}</h1>
      <h2>{email}</h2>
      <button>{isBanned ? 'Habilitar' : 'Deshabilitar'}</button>
    </div>
  )
}

export default User