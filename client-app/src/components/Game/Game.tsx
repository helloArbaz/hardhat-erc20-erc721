import { Box } from '@mui/material'
import AppBarMenu from '../../global/components/AppBarMenu'
import Cards from './components/Cards'
import './Game.css'

function Game() {
  return (
    <Box bgcolor={"#141A20"} height={'100vh'} pb={5}>
      <AppBarMenu />
      <Box pt={2}>
        <Cards />
      </Box>
      </Box>
  )
}

export  {Game}
