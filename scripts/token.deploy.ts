import { ethers } from "hardhat";
import {writeContractAddress} from "../global.contract.helper"

async function main() {
  const GiggleToken = await ethers.getContractFactory("GiggleToken");
  const giggleToken = await GiggleToken.deploy();

  await giggleToken.deployed();
  writeContractAddress("GiggleToken",giggleToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
