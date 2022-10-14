const Player = require('../src/player')

const chai = require('chai');
const { expect } = require('chai')

describe('Player tests', () => {
    it('should create a new instance of player with a name', () => {
        const shaf = new Player("Shafiul");

        expect(shaf.name).to.equal("Shafiul")
    })

})