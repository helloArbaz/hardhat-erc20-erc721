import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AppBarMenu from '../../global/components/AppBarMenu'
import { useNavigate } from 'react-router-dom'

const InstallMetaMask = function () {
  let navigate = useNavigate()
  return (
    <Box>
      <AppBarMenu />
      <Box p={5}>
        {/* <Box pb={6}>
          <Typography color="error" variant="h5" fontWeight={'bold'}>
            You need to install MetaMask
          </Typography>
        </Box> */}
        <Box
          pt={5}
          display={'flex'}
          flexDirection={'row'}
          p={2}
          textAlign="center"
          justifyContent={'center'}
        >
          <img src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" />
        </Box>
        <Box
          onClick={() =>
            (window.location.href =
              'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn')
          }
          style={{ cursor: 'pointer' }}
          pt={2}
          color="blue"
          textAlign={'center'}
        >
          <Typography color={'inherit'} fontWeight={'bold'} variant="h5">
            Install MetaMask Click Here
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default InstallMetaMask
