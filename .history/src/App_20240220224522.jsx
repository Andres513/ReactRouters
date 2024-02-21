import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import RoutesCont from "./Components/Routes"
import './App.css'

function App() {
  
  return (
    <>
    <h1>Hello React Router!</h1>
      <div id="container">
      <Navbar/>
      
      {/* <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div> */}
      <div id="main-section">
        <RoutesCont/>
        {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
        </Routes> */}
        </div>
        </div>
    {/* </div> */}
    </>
  )
}

export default App
