import { Routes, Route, Link } from "react-router-dom"
import Red from "./Components/Red"
import Blue from "./Components/Blue"
import './App.css'

function App() {
  
  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" />
          <Route path="/red" element={<Red />}/>
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
