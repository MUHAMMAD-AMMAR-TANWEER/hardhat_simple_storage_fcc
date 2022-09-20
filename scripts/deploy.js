//Import

const { ethers } = require("hardhat")

//function
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("deploying contract......")
    const SimpleStorage = await SimpleStorageFactory.deploy()
    await SimpleStorage.deployed()

    console.log(`The address of contract is ${SimpleStorage.address}`)
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
