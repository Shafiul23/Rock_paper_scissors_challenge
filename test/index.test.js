const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = "http://localhost:3000"

describe('Index test', () => {
    it('should go back to index page after get request', async () => {
        const res = await chai.request(server).get('/').send()

        expect(res).to.be.html;
        expect(res).to.have.status(200);
    });
});