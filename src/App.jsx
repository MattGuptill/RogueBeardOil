
import { Route, Routes } from 'react-router-dom'
import Navbar  from './Components/Navbar/Navbar'
import { About } from './Components/Pages/About'
import { Contact } from './Components/Pages/Contact'
import { Shop } from './Components/Pages/Shop'
import Home  from './Components/Pages/Home/Home'

function App() {
  

  return (
    <div className='box-border w-full h-full font-paragraph'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Shop/>} />
      </Routes>
    </div>
  )
}

export default App
