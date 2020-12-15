const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const {sleepData} = require('./test-data/sleep-data');

describe('Sleep', () => {
    let sleep;
    beforeEach((done) => {
          sleep = new Sleep(1, sleepData);
          done();
    });

    it('should be an instance of Sleep', () => {
        expect(sleep).to.be.an.instanceof(Sleep);
    });

    it('should take in a user id', () => {
        expect(sleep.id).to.equal(1);
    });

    it('should take in the sleep data set', () => {
        expect(sleep.data).to.deep.equal(sleepData);
    });

    it('should be able to calculate the average number of hours slept of each day overall', () => {
        expect(sleep.calcUserAvg('hoursSlept')).to.equal('8.1');
    });

    it('should be able to calculate the average sleep quality rating of each day overall', () => {
        expect(sleep.calcUserAvg('sleepQuality')).to.equal('2.6');
    });

    it('should be able to find the hours the user slept on specific date', () => {
        expect(sleep.findByDate('2019/06/18', 'hoursSlept')).to.equal(10.4);
    });

    it('should be able to find the quality of sleep on a specific date', () => {
        expect(sleep.findByDate('2019/06/18', 'sleepQuality')).to.equal(3.1);
    });

    it('should return the hours slept each day over a week', () => {
        expect(sleep.createWeeklySleepLog('2019/06/15', 'hoursSlept')).to.deep.equal({
            '2019/06/15': 6.1,
            '2019/06/16': 4.1,
            '2019/06/17': 8,
            '2019/06/18': 10.4,
            '2019/06/19': 10.7,
            '2019/06/20': 9.3,
            '2019/06/21': 7.8
          });
    });

    it('should return the sleep quality each day over a week', () => {
        expect(sleep.createWeeklySleepLog('2019/06/15', 'sleepQuality')).to.deep.equal({
            '2019/06/15': 2.2,
            '2019/06/16': 3.8,
            '2019/06/17': 2.6,
            '2019/06/18': 3.1,
            '2019/06/19': 1.2,
            '2019/06/20': 1.2,
            '2019/06/21': 4.2
          });
    });
});
