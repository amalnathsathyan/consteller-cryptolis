/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
//const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const privateKey = '7c2a20f75203ed27912f1dfd07a74ad09df38a8abe84f2d80cba96343d573f48';

module.exports = {
  defaultNetwork: "hardhat",
networks: {
    hardhat: {
      chainId: 1337
    },
 mumbai: {
   url: "https://rpc-mumbai.maticvigil.com/",
   chainId:80001,
   accounts: [privateKey]
 },
 },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}