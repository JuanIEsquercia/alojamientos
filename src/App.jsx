import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Alojamientos from './components/Alojamientos'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alojamientos" element={<Alojamientos />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App