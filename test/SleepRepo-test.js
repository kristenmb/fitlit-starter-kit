const chai = require('chai');
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepo');
const sleepData = require('../data/sleep');

describe('SleepRepo', () => {
    let sleepRepo;

    beforeEach((done) => {
        sleepRepo = new SleepRepo(sleepData);
        done();
    });

    it('should be an instance of SleepRepo', () => {
        expect(sleepRepo).to.be.an.instanceof(SleepRepo);
    });

    it('should take in the sleep data', () => {
        expect(sleepRepo.data).to.deep.equal(sleepData);
    });
});