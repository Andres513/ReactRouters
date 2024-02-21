import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
    <div id="navbar">{/* navigation here */}</div>
    <div id="main-section">
      <Routes>
      <h1>Blue</h1>
      </Routes>
      <Routes>
      <h1>Red</h1>
      </Routes>
        </div>
      </div>
    </>
  )
}

export default App
