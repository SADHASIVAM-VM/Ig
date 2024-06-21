import React from 'react'
import './App.css'
import Login from './Pages/Login'
import NotFoundPage from './Pages/404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
