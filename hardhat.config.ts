import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  paths:{
    artifacts:"./client-app/src/compile-contract"
  },
  solidity: "0.8.17",
};

export default config;
