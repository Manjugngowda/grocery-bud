
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainHome from './pages/MainHome'
import GroceryBud from './pages/groceryBud/GroceryBud'

import './App.css'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/grocery-bud' element={<GroceryBud />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
