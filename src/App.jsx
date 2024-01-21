
import { Route, Routes } from 'react-router-dom'
import Navbar  from './Components/Navbar/Navbar'
import { About } from './Components/Pages/About'
import { Contact } from './Components/Pages/Contact'
import { Products } from './Components/Pages/Products'
import  Home   from './Components/Pages/Home/Home'
import Shop from './Components/Pages/Shop/Shop'


function App() {
  

  return (
    <div className='box-border w-full h-full font-paragraph'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
