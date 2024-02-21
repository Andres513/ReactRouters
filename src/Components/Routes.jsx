import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Red from "./Red"
import Blue from "./Blue"

export default function RoutesCont() {
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