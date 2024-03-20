import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home, Login, Register} from "./pages"
import Layout from "./layout/Layout"
import FlowBiteCarousel from "./components/Carousel"

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Route>
        <Route path='/' element={<Layout />}>
          <Route index element={< Home/>}/>
          <Route path='test' element={< FlowBiteCarousel/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App