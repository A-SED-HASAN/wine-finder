import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, SingleWine, Error } from './routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='cocktail/:id' element={<SingleWine />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
