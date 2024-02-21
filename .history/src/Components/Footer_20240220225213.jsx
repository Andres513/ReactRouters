import { Routes, Route } from "react-router-dom"

export default function Footer(){
    return (
        <>
        <div className="footer">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
        </Routes>
        </div>
        </>
    )
}