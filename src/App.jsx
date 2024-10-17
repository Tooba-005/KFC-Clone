import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Bucket from './Components/Bucket'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/bucket' element={<Bucket/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
