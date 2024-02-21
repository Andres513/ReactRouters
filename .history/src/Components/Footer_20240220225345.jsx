import { Routes, Route } from "react-router-dom"
import Red from "./Red"
import Blue from "./Blue"
import Home from "./Home"

export default function Footer(){
    return (
        <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
        </Routes>
        </>
    )
}