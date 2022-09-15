import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import SecurityIcon from '@mui/icons-material/Security'

import AppBarMenu from '../../global/components/AppBarMenu'
import CarouselView from '../../global/components/CarouselView'
import { store } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../actions/counter'

const Landing = function () {
  const count = useSelector((state?: any) => state.counter)
  const dispatch = useDispatch()

  console.log(count,'count')

  return (
    <Box bgcolor={'#141A20'} height="100vh">
      {/* <Button color='secondary' onClick={() => dispatch(increment())}>{`Click => ${count}`}</Button> */}
      <AppBarMenu />
      <Box bgcolor={'#141A20'}>
        <Box p={2} pb={2} textAlign={'center'}>
          <Typography variant="h4" color={'white'}>
            Transform the way you move, manage and tokenize value.
          </Typography>
        </Box>
        <Box p={2}>
          <CarouselView />
        </Box>
        <Box p={3} pt={5} bgcolor={'#141A20'}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ background: '#141A20' }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Box
                p={1}
                bgcolor={'#141A20'}
                color={'white'}
                border="1px solid #EFB90B"
                borderRadius={1}
              >
                <Box
                  flexDirection={'row'}
                  display={'flex'}
                  justifyContent="center"
                  alignContent={'center'}
                  alignItems="center"
                >
                  <h2>GIGGLE NFT</h2>
                  <Box style={{ cursor: 'pointer' }} pl={0.5} pt={1}>
                    <LaunchIcon color="primary" />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="caption">
                    NFT's will be coming soon.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Box
                p={1}
                bgcolor={'#141A20'}
                color={'white'}
                border="1px solid #EFB90B"
                borderRadius={1}
              >
                <Box
                  flexDirection={'row'}
                  display={'flex'}
                  justifyContent="center"
                  alignContent={'center'}
                  alignItems="center"
                >
                  <h2>Earn Token While Gaming</h2>
                  <Box
                    //   onClick={() => navigate('/game')}
                    style={{ cursor: 'pointer' }}
                    pl={0.5}
                    pt={1}
                  >
                    <LaunchIcon color="secondary" />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="caption">
                    You can earn GIGGLE_TOKES while gaming
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Box
                p={1}
                bgcolor={'#141A20'}
                color={'white'}
                border="1px solid #EFB90B"
                borderRadius={1}
              >
                <Box
                  flexDirection={'row'}
                  display={'flex'}
                  justifyContent="center"
                  alignContent={'center'}
                  alignItems="center"
                >
                  <h2>DAPP</h2>
                  <Box style={{ cursor: 'pointer' }} pl={0.5} pt={1}>
                    <LaunchIcon color="secondary" />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="caption">
                    You can earn GIGGLE_TOKES while gaming
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box p={3} pt={5} bgcolor={'#141A20'}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ background: '#141A20' }}
          >
            {[1, 2, 3].map((val, ind) => {
              return (
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    p={1}
                    bgcolor={'#141A20'}
                    color={'white'}
                    border="1px solid #EFB90B"
                    borderRadius={1}
                  >
                    <Box
                      flexDirection={'row'}
                      display={'flex'}
                      justifyContent="center"
                      alignContent={'center'}
                      alignItems="center"
                    >
                      <Box fontSize={220}>
                        <SecurityIcon fontSize="inherit" color="secondary" />
                      </Box>
                      <Box style={{ cursor: 'pointer' }} pl={0.5} pt={1}>
                        {/* <LaunchIcon color="primary" /> */}
                      </Box>
                    </Box>
                    <Box p={2}>
                      <Typography variant="h6" color={''}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Accusantium sint asperiores saepe dignissimos
                        provident, optio atque ad enim incidunt odio, eaque
                        autem! Ad esse nihil ex, eum ab ipsum quos.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>

        <Box p={3} color={'black'} bgcolor="white">
          <Box fontWeight={'bold'} fontSize={30}>
            <Typography variant="inherit" color={'secondary'}>
              More Coming
            </Typography>
          </Box>
          <Box fontWeight={'bold'} fontSize={30}>
            <Typography variant="inherit" color={'secondary'}>
              Soon.....
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Landing
