import { Route } from "react-router-dom"

export default function RoutesCont() {
return (
    <>
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
        </Routes></>
)
}