import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import AppBarMenu from '../../global/components/AppBarMenu'
import TokenIcon from '@mui/icons-material/Token'

import { useSelector, useDispatch } from 'react-redux'
import { ethers } from 'ethers'
import GiggleContractAddress from '../../contract-deployed-address/GiggleToken/GiggleToken.json'
import GiggleContractABIJson from '../../compile-contract/contracts/GiggleToken.sol/GiggleToken.json'
import { Typography } from '@mui/material'

const Token = function () {
  const contract = useSelector((state?: any) => state.contract)
  const metaMask = useSelector((state?: any) => state.metaMask)
  const { contract: temp, account, provider: freeProvider } = contract

  let [tokenValue, setTokenValue] = useState(null)
  
  // transfer code.
  //   let trx = await usdcContract.transfer("0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",10);
  //       let ttt = await trx.wait();
  //       console.log(trx,'trx',ttt);

  //       let usdcBalance2 = await usdcContract.balanceOf(accountNew)
  //       console.log(usdcBalance2.toString(), 'usdcBalance2')

  async function loadTokenBalance() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      let accountNew = await signer.getAddress()
      const usdcContract = new ethers.Contract(
        GiggleContractAddress.address,
        GiggleContractABIJson.abi,
        signer,
      )
      let usdcBalance = await usdcContract.balanceOf(accountNew)
      setTokenValue(usdcBalance.toString())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadTokenBalance()
  }, [])

  return (
    <Box>
      <AppBarMenu />
      <Box pt={5}>
        <Box onClick={() => loadTokenBalance()}>
          <Box display={'flex'} flexDirection="column">
            <Box
              fontSize={300}
              display={'flex'}
              alignContent="center"
              justifyContent={'center'}
            >
              <TokenIcon color="secondary" fontSize="inherit" />
            </Box>
            <Box textAlign={'center'}>
              <Typography variant="h4">{tokenValue} [GGL]</Typography>
              <Box fontWeight={'bold'}>
                <Typography
                  color={'secondary'}
                  fontWeight={'inherit'}
                  variant="h4"
                >
                  GIGGLE TOKEN
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Token
