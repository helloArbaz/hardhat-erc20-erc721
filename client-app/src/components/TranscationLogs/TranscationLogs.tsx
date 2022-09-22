import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

import AppBarMenu from '../../global/components/AppBarMenu'
import GiggleContractAddress from '../../contract-deployed-address/GiggleToken/GiggleToken.json'
import GiggleContractABIJson from '../../compile-contract/contracts/GiggleToken.sol/GiggleToken.json'
import { ethers } from 'ethers'

interface TransactionIE {
  _from: any
  _to: any
  _amount: any
}

const TransactionLogs = function () {
  let [TranxLogs, setTranxLogs] = useState([])

  const loadTrans = async function () {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const usdcContract = new ethers.Contract(
      GiggleContractAddress.address,
      GiggleContractABIJson.abi,
      signer,
    )
    const result = await usdcContract.getPersonalLedgers()
    setTranxLogs(result)
    console.log(result, 'result')
  }

  useEffect(() => {
    loadTrans()
  }, [])

  return (
    <Box bgcolor={"#141A20"} height="100vh">
      <AppBarMenu />
      <Box>
        <Box p={2} >
          <TableContainer component={Paper}>
            <Table
              size="medium"
              aria-label="a dense table"
              style={{background:"#141A20"}}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant='h5' fontWeight={"bold"} color={"secondary"}>From</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='h5' fontWeight={"bold"} color={"secondary"}>To</Typography>
                  </TableCell>
                  <TableCell>
                  <Typography variant='h5' fontWeight={"bold"} color={"secondary"}>Amount</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TranxLogs.map((v?: any, i?: any) => {
                  return (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                      <Typography variant='button' fontWeight={"bold"} color={"secondary"}>{v._from}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                      <Typography variant='button' fontWeight={"bold"} color={"secondary"}>{v._to}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                      <Typography variant='button' fontWeight={"bold"} color={"secondary"}>{v._amount.toString()}</Typography>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default TransactionLogs
