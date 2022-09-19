import React from 'react'
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Box } from '@mui/material'


import './App.css'
import Landing from './components/Landing/Landing'
import {Game} from './components/Game/Game'
import NFT from "./components/NFT/NFT"
import UniSwap from './components/UniSwap/UniSwap'
import Token from './components/Token/Token'




function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/nft" element={<NFT />}></Route>
          <Route path="/uniswap" element={<UniSwap />}></Route>
          <Route path="/token" element={<Token />}></Route>
        </Routes>
      </Router>
    </Box>
  )
}

export default App
