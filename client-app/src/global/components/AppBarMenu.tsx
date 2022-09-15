import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

// import { store } from '../../store'
// import { increment } from '../../actions/counter'
// import { getWeb3 } from '../../config/web3Connect'
// import Web3 from 'web3'

const pages = ['Token', 'NFT', 'Game']
const settings = ['Profile', 'Transaction', 'Logout']

const AppBarMenu = () => {
  // const state = store.getState()

  // console.log(state, 'state')

  const [navStyle, setnavStyle] = React.useState(null)
  const [navAch, setnavAch] = React.useState(null)
  const [counter, setCounter] = React.useState(0)

  const handleOpenNavMenu = (event?:any) => {
    setnavStyle(event.currentTarget)
  }
  const handleOpenUserMenu = (event?:any) => {
    setnavAch(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setnavStyle(null)
  }

  const handleCloseUserMenu = () => {
    setnavAch(null)
  }

  function onIncrement() {
    // console.log('----', store)
    // store.dispatch({
    //   type: 'increment',
    //   text: 'Use Redux',
    // })
  }

  const connect = async () => {
    // let response = await getWeb3()
    // console.log(response, 'respo')
  }

  React.useEffect(() => {
    // store.subscribe(updateState)
  }, [])

  function updateState() {
    // const state = store.getState()
    // setCounter(state.counter)
  }

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GIGGLE TOKEN
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={navStyle}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(navStyle)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GIGGLE TOKEN
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box
                    display={'flex'}
                    flexDirection="row"
                    alignItems={'center'}
                    color={'white'}
                  >
                    <Box pr={1} fontSize={12}>
                      0xDeCAf00000000000000000000000000000000000
                    </Box>
                    <AccountBalanceWalletIcon color="inherit" />
                  </Box>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={navAch}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(navAch)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
export default AppBarMenu
