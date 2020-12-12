const chai = require('chai');
const expect =chai.expect;

const Sleep = require('../src/Sleep');

describe('Sleep', () => {
    let sleep;
    let sleepData;

    beforeEach((done) => {
        sleepData = [
            { userID: 1, 
                date: '2019/06/15', 
                hoursSlept: 6.1, 
                sleepQuality: 2.2 
            },
            { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
            { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
            {
              userID: 1,
              date: '2019/06/18',
              hoursSlept: 10.4,
              sleepQuality: 3.1
            },
            {
              userID: 1,
              date: '2019/06/19',
              hoursSlept: 10.7,
              sleepQuality: 1.2
            },
            { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
            { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 }
          ];
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


});

// 
// 2. Avergae sleep quality per day over all time
// Input: Array of sleep objects for a user
// Output: Number, average sleep quality overall
// Methods: Reduce
// Sum all the sleep quality property by using reduce
// Divide the total by the number of days 
// calcUserAvgQuality()
//
// 3. How many hours user slept specific day by date
// Input: Array of sleep objects
// Output: Number
// Methods: Find
// Find the hours slept by the date
// 
// 4. Sleep quality of user by specific day by date
// Input: Array of sleep objects
// Output: Number 
// Methods: Find
// FInd the sleep quality by a date
// 
// 5. USer's hours slept each day over the course of a week
// Input: Array of sleep objects
// Output: Object with keys of dates and values of hours slept
// Methods: findIndex, slice, reduce
// 
// 6. User's sleep quality each day over the course of a week
// Input: Array of sleep objects 
// Output: Object with key's of the dates and the value's as the sleep quality
// Methods: findIndex, slice, reduce
//