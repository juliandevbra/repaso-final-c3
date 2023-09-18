import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './utils/ErrorBoundary'
function App() {

  return (
    <>
     <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<ErrorBoundary><Detail/></ErrorBoundary>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
     
    </>
  )
}

export default App
