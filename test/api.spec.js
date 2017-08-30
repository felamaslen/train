/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;

process.env.PORT = 8001;

const app = require('../src/api/server');

class TestReq {
}
class TestRes {
    constructor() {
        this.statusCode = 200;
        this.body = null;
    }
    status(code) {
        this.statusCode = code;

        return this;
    }
    end(body) {
        this.body = body;

        return this;
    }
}

describe('Server app', () => {
    it('should run a web server', async () => {
        const srv = await app.server();

        expect(srv).to.be.an('object');
        expect(srv.port).to.be.equal(process.env.PORT);
        expect(srv.app).to.be.ok;
    });
});

