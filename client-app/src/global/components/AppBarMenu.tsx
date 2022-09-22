import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { ethers } from 'ethers'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from '@mui/material'

import GiggleContractAddress from '../../contract-deployed-address/GiggleToken/GiggleToken.json'
import GiggleContractABIJson from '../../compile-contract/contracts/GiggleToken.sol/GiggleToken.json'
import {
  metaMaskConnect,
  metaMaskSuccess,
  metaMaskError,
} from '../../actions/metaMask.action'
import {
  contractConnect,
  contractError,
  contractSuccess,
} from '../../actions/contract.load'

/**
 * static
 */
const pages = [
  { name: 'NFT', url: '/nft' },
  { name: 'Game', url: '/game' },
  { name: 'UniSwap', url: '/uniswap' },
]
const settings = [
  { name: 'Token', url: '/token' },
  { name: 'Transfer', url: '/transfer' },
  { name: 'Transaction Logs', url: '/transaction-logs' },
  { name: 'Logout', url: '/' },
]

/**
 *
 * @returns
 */
const AppBarMenu = () => {
  const [navStyle, setnavStyle] = React.useState(null)
  const [navAch, setnavAch] = React.useState(null)
  const [counter, setCounter] = React.useState(0)
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const metaMast = useSelector((state?: any) => state.metaMask)
  const contract = useSelector((state?: any) => state.contract)

  const handleOpenNavMenu = (event?: any) => {
    setnavStyle(event.currentTarget)
  }
  const handleOpenUserMenu = (event?: any) => {
    setnavAch(event.currentTarget)
  }

  const handleCloseNavMenu = (page?: any) => {
    setnavStyle(null)
    navigate(page.url)
  }

  const handleCloseUserMenu = (event: any, setting: any) => {
    setnavAch(null)
    if (setting.url === '/') {
      dispatch(metaMaskSuccess({account:null}))
      navigate(setting.url)
    } else navigate(setting.url)
  }

  const loadContract = async () => {
    dispatch(contractConnect())
    try {
      let provider = ethers.getDefaultProvider()
      let contractAddress = GiggleContractAddress.address
      let contract = new ethers.Contract(
        GiggleContractAddress.address,
        GiggleContractABIJson.abi,
        provider,
      )
    } catch (err) {
      dispatch(contractError(err))
    }
  }

  const connectMetamask = async () => {
    dispatch(metaMaskConnect())
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      let pAccounts = await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      let account = await signer.getAddress()
      dispatch(metaMaskSuccess({ account }))
      loadContract()
    } catch (e) {
      navigate('/install-metamask')
      dispatch(metaMaskError(e))
    }
  }
  React.useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload()
      })
    }
  })

  // redux values
  const { isConnected, account } = metaMast
  // const { account } = contract

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
                onClick={() => {
                  if (!account) connectMetamask()
                  else handleOpenUserMenu()
                }}
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
                {pages.map((page, i) => (
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
              {pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={(e) => {
                    if (!account) connectMetamask()
                    else handleOpenUserMenu(e)
                  }}
                  sx={{ p: 0 }}
                >
                  <Box
                    display={'flex'}
                    flexDirection="row"
                    alignItems={'center'}
                    color={'white'}
                  >
                    <Box pr={1} fontSize={12}>
                      <Typography variant="caption" color={'secondary'}>
                        {account || 'Guest'}
                      </Typography>
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
                onClick={()=>setnavAch(null)}
              >
                {settings.map((setting, ind) => (
                  <MenuItem
                    key={ind}
                    onClick={(e) => {
                      handleCloseUserMenu(e, setting)
                    }}
                  >
                    <Box fontWeight={'bold'}>
                      <Typography textAlign="center">{setting.name}</Typography>
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
