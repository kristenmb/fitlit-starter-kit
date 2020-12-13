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

    it('should be able to find all users average sleep quality', () => {
        expect(sleepRepo.findAllUserAvg()).to.equal('7.5');
    });

    it('should find all users who average sleep quality greater than 3 for a specified week', () => {
        expect(sleepRepo.findQualitySleepers('2019/07/18')).to.deep.equal([
            '1',  '4',  '5',  '6',  '7',
            '9',  '10', '11', '14', '15',
            '17', '18', '20', '21', '23',
            '28', '29', '31', '33', '34',
            '35', '36', '37', '38', '41',
            '42', '44', '46', '47'
          ]);
    });

    it('should find user(s) who slept the most number of hours by date', () => {
        expect(sleepRepo.findWellRestedUsers('2019/07/18')).to.deep.equal([{ userID: 24, date: '2019/07/18', hoursSlept: 10.9, sleepQuality: 2.2 }]);
    });
});