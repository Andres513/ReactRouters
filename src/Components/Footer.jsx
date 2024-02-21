import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        </>
    )
}