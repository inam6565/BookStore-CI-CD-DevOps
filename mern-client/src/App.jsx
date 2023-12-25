import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>Hello! I am building book store using MERN Stack</div> */}
      {/* <nav>Site Logo</nav> */}
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
