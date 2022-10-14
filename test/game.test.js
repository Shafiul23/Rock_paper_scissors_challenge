const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = "http://localhost:3000"

describe('Game tests', () => {
    it('should make a post request using player 1 name ', async () => {
        const res = await chai.request(server).post('/game')

        expect(res).to.have.status(200);
    })

    it('should successfully get name', async () => {
        const res = await chai.request(server).get('/game')

        expect(res).to.have.status(200);
        expect(res.text).to.contain('name')
    });
});