const { ethers } = require("hardhat")

const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let SimpleStorageFactory, simpleStorage
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        console.log("deploying contract......")
        simpleStorage = await SimpleStorageFactory.deploy()
        await simpleStorage.deployed()
    })

    it("Should start the number with 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"

        assert.equal(currentValue.toString(), expectedValue)
    })
})
