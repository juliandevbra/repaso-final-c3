import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
      
    </>
  )
}

export default App
