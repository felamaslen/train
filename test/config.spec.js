const expect = require('chai').expect;

require('dotenv').config();
const config = require('../src/config')();

describe('Configuration', () => {
    it('should be an object', () => {
        expect(config).to.be.an('object');
    });

    it('should define app config', () => {
        expect(config.app).to.be.an('object');
    });

    describe('App config', () => {
        it('should define a title', () => {
            expect(config.app.title).to.be.a('string').lengthOf.greaterThan(0);
        });
    });
});

