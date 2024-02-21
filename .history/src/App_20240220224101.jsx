import { Routes, Route } from "react-router-dom"
import Red from "./Components/Red"
import Blue from "./Components/Blue"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import RoutesCont from "./Components/Routes"
import './App.css'

function App() {
  
  return (
    <>
    <h1>Hello React Router!</h1>
      <div id="container">
      <Navbar/>
      </div>
      {/* <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div> */}
      <div id="main-section">
        {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
        </Routes> */}
        </div>
    {/* </div> */}
    </>
  )
}

export default App
