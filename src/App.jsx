import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/Signup/SignUp"
import Movie from "./components/Movie/Movie"
import Profile from "./components/Profile/Profile"
import Users from "./components/Users/Users"


function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/movie" element={<Movie />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/admin"  element={< Users/>}></Route>
     </Routes>
    </>
  )
}

export default App
