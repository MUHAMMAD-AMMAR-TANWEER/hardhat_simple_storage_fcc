import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
import "@nomiclabs/hardhat-etherscan"
import "./tasks/block-number"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHER_SCAN_API = process.env.ETHER_SCAN_API

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            //accounts: Thanks hardhat
            chainId: 31337,
        },
    },

    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHER_SCAN_API,
    },

    gasReporter: {
        enabled: true,
        // outputFile: "gas-report.txt",
        // noColor: true,
        token: "MATIC",
    },
}
