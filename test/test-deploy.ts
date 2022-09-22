import  {ethers} from "hardhat"

import  {expect, assert}  from "chai"

import {SimpleStorage, SimpleStorage__factory} from "../typechain-types"

describe("SimpleStorage", function () {
    let SimpleStorageFactory: SimpleStorage__factory
    let simpleStorage: SimpleStorage
    beforeEach(async function () {
        SimpleStorageFactory = (await ethers.getContractFactory("SimpleStorage")) as SimpleStorage__factory
        console.log("deploying contract......")
        simpleStorage = await SimpleStorageFactory.deploy()
        await simpleStorage.deployed()
    })

    it("Should start the number with 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"

        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should update the store value", async function () {
        const updatingVal = await simpleStorage.store("7")
        await updatingVal.wait(1)
        const updatedValue = await simpleStorage.retrieve()

        assert.equal(updatedValue.toString(), "7")
    })

    it("gets the favorite person", async function () {
        const addingPerson = await simpleStorage.addPerson("Ammar", "7")
        await addingPerson.wait(1)
        const addedPerson = await simpleStorage.nameToFavoriteNumber("Ammar")
        assert.equal(addedPerson.toString(), "7")
    })
})
