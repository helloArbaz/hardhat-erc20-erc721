import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from '@mui/material'

//
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import {Game} from './components/Game/Game'

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Game />}></Route>
        </Routes>
      </Router>
    </Box>
  )
}

export default App
