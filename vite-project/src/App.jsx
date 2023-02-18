import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Cart from './Pages/Cart'
import './styles/index.css'
import StoreContextProvider from './Context/StoreContext'
import Product from './Components/Product'
import Jeans from './Pages/Jeans'
import Veste from './Pages/Veste'
import Footer from './Components/Footer'
import About from './Pages/About'
import Shoes from './Pages/Shoes'


function App() {

  return (
    <>
      <StoreContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
          <Route path='/' element={<About />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/veste' element={<Veste />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pants' element={<Jeans />} />
            <Route path='/product/:id' element={<Product/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </StoreContextProvider>
    </>
  )
}

export default App
