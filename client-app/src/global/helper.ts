import { ethers } from 'ethers'
import { Contract } from 'hardhat/internal/hardhat-network/stack-traces/model'
const Lorem = () =>
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque aut est animi fuga, quam nam! Voluptatibus, molestiae. Perferendis quo tempora ut maiores enim id minus ullam unde quae aperiam.'

const loadContract = async (_contractName: any) => {
  var _contractAddress = require(`../contract-deployed-address/${_contractName}/${_contractName}.json`)
  var _contractJSON_ABI_Code = require(`../compile-contract/contracts/${_contractName}.sol/${_contractName}.json`)
  return {_contractAddress,_contractJSON_ABI_Code}
}

export { Lorem, loadContract }
