import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>Header</nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={"Home"}/>
          <Route path='about' element={"About"}/>
          <Route path='posts' element={"Posts"}/>
          <Route path='*' element={"404"}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
