const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = "http://localhost:3000"

describe('Turn tests', () => {
    it('should make a post request for rps choice', async () => {
        const res = await chai.request(server).post('/turn')

        expect(res).to.have.status(200);
        expect(res.text).to.contain('The computer chose: ');
    })
});