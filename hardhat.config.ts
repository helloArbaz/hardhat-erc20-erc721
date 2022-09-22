import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()

const {API_URL,PRIVATE_KEY} = process.env


const config: HardhatUserConfig = {
  paths:{
    artifacts:"./client-app/src/compile-contract"
  },
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url:API_URL,
      accounts:[`0x${PRIVATE_KEY}`]

    }
  }
};

export default config;
