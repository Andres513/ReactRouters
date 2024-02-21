import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        
        <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      </div>
    )
}
