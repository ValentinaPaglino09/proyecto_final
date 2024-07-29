import React from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
const navigate = useNavigate()
const user = JSON.parse(sessionStorage.getItem('user'))

  return (
    <nav>
      <img></img>
      <span>
        <button onClick={(e) => {
          e.preventDefault()
          navigate(user ? '/' : '/login')
        }}>{user ? 'Sign Out' : 'Sign in'}</button>
        { user && <button onClick={(e) => {
          e.preventDefault()
          navigate('/profile')
        }}>Profile</button>}
      </span>
    </nav>
  )
}

export default Header