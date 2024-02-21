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
      <div id="main-section">
        <RoutesCont/>
        </div>
      </div>
    </>
  )
}

export default App
