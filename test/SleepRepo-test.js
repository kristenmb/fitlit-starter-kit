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
        expect(sleepRepo.findQualitySleepers()).to.deep.equal();
    });

});


// 
// 2. Find all users who average a sleep quality greater
// than 3 for a given week
// Input: Array of sleep objects
// Output: Array of user's 
// Methods: findIndex, slice, reduce
// Specific week as a parameter
// Create a weekly sleep average log for all users 
// Push the object of the user's id and average sleep quality
// Filter those with an average above 3 
// 
// 3. By date find users who slept the most nmber of hours (one or more if they tied)
// Input: Array of sleep objects
// Output: The user(s) id or object
// Methods:  Math.max.apply, reduce, sort
// Reduce to add the user id's based on the user's with highest hoursSlept to array
// sort all the highest hours slept to the fron of the array 
// 