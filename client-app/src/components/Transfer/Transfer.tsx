import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import AppBarMenu from '../../global/components/AppBarMenu'

import { Contract, ethers } from 'ethers'
import GiggleContractAddress from '../../contract-deployed-address/GiggleToken/GiggleToken.json'
import GiggleContractABIJson from '../../compile-contract/contracts/GiggleToken.sol/GiggleToken.json'
import { Button, TextField, Typography } from '@mui/material'

interface conto {
  transfer?: any
}

const Transfer = function () {
  let [account, setAccount] = useState('')
  let [provider, setProvider] = useState({})
  let [signer, setSigner] = useState({})
  let [contract, setContract] = useState<conto>({})

  let [tokenSize, setTokenSize] = useState('')
  let [toAddress, setToAddress] = useState('')

  const loadContract = async function () {
    // setSigner(signer)
    // setContract(usdcContract)
    // setProvider(provider)
    // setAccount(accountNew)
  }

  useEffect(() => {
    loadContract()
  }, [])

  const transferToken = async (tokenSize: string) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const usdcContract = new ethers.Contract(
        GiggleContractAddress.address,
        GiggleContractABIJson.abi,
        signer,
      )
      let tranx = await usdcContract.transfer(toAddress, tokenSize)
      setToAddress('')
      setTokenSize('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box>
      <AppBarMenu />
      <Box
        display={'flex'}
        flexDirection="column"
        justifyContent="center"
        p={2}
      >
        <Box>
          <Typography fontWeight={'bold'} variant="h2">
            Transfer Token
          </Typography>
        </Box>
        <Box p={2}>
          <TextField
            id="outlined-textarea"
            label="To"
            placeholder="Transfer To"
            onChange={(e) => setToAddress(e.target.value)}
            value={toAddress}
            multiline
            fullWidth
          />
        </Box>
        <Box p={2}>
          <TextField
            id="outlined-textarea"
            label="Token"
            placeholder="Number Of Token"
            type={'number'}
            value={tokenSize}
            fullWidth
            onChange={(e) => setTokenSize(e.target.value)}
          />
        </Box>

        <Box p={2}>
          <Button
            onClick={() => transferToken(tokenSize)}
            disabled={!tokenSize && !toAddress}
            style={{ padding: 20, borderRadius: 5 }}
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Transfer
