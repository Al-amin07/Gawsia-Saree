
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'

function App() {
  

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
