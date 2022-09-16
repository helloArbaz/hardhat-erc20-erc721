import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { useNavigate } from 'react-router-dom'

const pages = [{ name: 'NFT', url: '/nft' },{name:"Game",url:"/game"},{name:"UniSwap",url:"/uniswap"}]
const settings = [
  'Token',
  'Transaction',
  'Transfer',
  'Transaction Logs',
  'Logout',
]

const AppBarMenu = () => {
  const [navStyle, setnavStyle] = React.useState(null)
  const [navAch, setnavAch] = React.useState(null)
  const [counter, setCounter] = React.useState(0)
  let navigate = useNavigate()

  const handleOpenNavMenu = (event?: any) => {
    setnavStyle(event.currentTarget)
  }
  const handleOpenUserMenu = (event?: any) => {
    setnavAch(event.currentTarget)
  }

  const handleCloseNavMenu = (page?:any) => {
    setnavStyle(null)
    navigate(page.url)
  }

  const handleCloseUserMenu = () => {
    setnavAch(null)
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
                {pages.map((page,i) => (
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
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
              {pages.map((page,i) => (
                <Button
                  key={i}
                  onClick={()=>handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
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
                    <Box fontWeight={'bold'}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Box>
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
export default React.memo(AppBarMenu)
