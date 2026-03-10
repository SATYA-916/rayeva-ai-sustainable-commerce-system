import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import History from './pages/History'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-emerald-600 flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              AI Eco-Categorizer
            </Link>
            <nav className="flex gap-4 border border-gray-100 rounded-lg p-1 bg-gray-50">
              <Link to="/" className="px-4 py-2 rounded text-sm font-medium hover:bg-white hover:shadow-sm text-gray-700 transition">Home</Link>
              <Link to="/history" className="px-4 py-2 rounded text-sm font-medium hover:bg-white hover:shadow-sm text-gray-700 transition">History</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
