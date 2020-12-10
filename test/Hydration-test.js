const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydration;
  let hydrationData;

  beforeEach((done) => {
    hydrationData = [
      {
        userID: 5,
        date: '2019/06/15',
        numOunces: 42
      },
      {
        userID: 5,
        date: '2019/06/16',
        numOunces: 79
      },
      {
        userID: 5,
        date: '2019/06/17',
        numOunces: 99
      },
      {
        userID: 5,
        date: '2019/06/18',
        numOunces: 39
      },
      {
        userID: 5,
        date: '2019/06/19',
        numOunces: 69
      },
      {
        userID: 5,
        date: '2019/06/20',
        numOunces: 89
      },
      {
        userID: 5,
        date: '2019/06/21',
        numOunces: 73
      }];
    hydration = new Hydration(5, hydrationData);
    done();
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should take in a user id', () => {
    expect(hydration.id).to.equal(5)
  });

  it('should take in the hydration data set', () => {
    expect(hydration.data).to.deep.equal(hydrationData);
  });

  it('should be able to calculate the average fluid ounces consumed for all time', () => {
    expect(hydration.calcAllTimeHydrationAvg()).to.equal(70);
  });



// find how many fluid ounces they consumed for a specific day (identified by a date)
  //input: array of objects
  //output: value of numOunces for given date
  //method: find object that matches given date and return numOunces value
  //TEST: for the user - findOuncesByDate() will return the correct numOunces.

// how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
  //input: array of objects
  //output: object with keys of dates and values of oz
  //method: filter for user's data set, filter for dates we want, reduce to new object
  //TEST: for the use - createWeeklyHydrationLog() to return object with correct key:value pairs
});
