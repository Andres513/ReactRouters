
import Navbar from "./Components/Navbar"
import RoutesCont from "./Components/Routes"
import Footer from "./Components/Footer"
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
        <div id="footer">
        
        </div>
      </div>
    </>
  )
}

export default App
