import { Box } from '@mui/material'
import { ethers } from 'ethers'

import AppBarMenu from '../../global/components/AppBarMenu'
import Cards from './components/Cards'
import './Game.css'
import GiggleContractAddress from '../../contract-deployed-address/GiggleToken/GiggleToken.json'
import GiggleContractABIJson from '../../compile-contract/contracts/GiggleToken.sol/GiggleToken.json'
import { useState } from 'react'

function Game() {
  let [winnerModal,setWinnerModal] = useState(true)

  const registerPlayer = async function () {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const giggleContract = new ethers.Contract(
        GiggleContractAddress.address,
        GiggleContractABIJson.abi,
        signer,
      )
      let usdcBalance = await giggleContract.playerEnterGamingZone()
      let tt = await usdcBalance.wait()
      console.log(tt)
    } catch (e:any) {
      const { message } = e
      if (message) alert(message)
    }
  }

  const rewardTokens = async function (gamingLevel: number) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const giggleContract = new ethers.Contract(
      GiggleContractAddress.address,
      GiggleContractABIJson.abi,
      signer,
    )
    let rewardCompleted = await giggleContract.playerClameRewards(gamingLevel);
    setWinnerModal(false)
  }

  return (
    <Box bgcolor={'#141A20'} height={'100vh'} pb={5}>
      <AppBarMenu />
      <Box pt={2}>
        <Cards 
        winnerModal={winnerModal}
        registerPlayer={registerPlayer} rewardTokens={rewardTokens} />
      </Box>
    </Box>
  )
}

export { Game }
