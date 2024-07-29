import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/Signup/SignUp"
import Profile from "./components/Profile/Profile"
import Users from "./components/Users/Users"
import {moviesArray} from './utils/data' 
import { useEffect, useState } from "react"
import MoviePage from "./components/MoviePage/MoviePage.jsx"
import { fetchData } from "./utils/fetchData.js"
import Header from "./components/Header/Header.jsx"


function App() {
  
  const [moviesData, setMoviesData] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
 

  useEffect(() => {

  //  fetchData('http://localhost:3000/movies', 'GET')
  //  .then(res => res.json())
  //  .then(data => setMoviesData(data))

    setMoviesData(moviesArray)

  }, [])


  return (
    <>
    <Header />
     <Routes>
      <Route path="/" element={<Home moviesData={moviesData} setSelectedMovie={setSelectedMovie}/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/movie" element={<MoviePage moviesData={moviesData} selectedMovieId={selectedMovie}/>}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/admin"  element={< Users/>}></Route>
     </Routes>
    </>
  )
}

export default App
