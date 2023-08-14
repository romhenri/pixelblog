import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='about' element={"About"}/>
          <Route path='posts' element={"Posts"}/>
          <Route path='*' element={"404"}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
