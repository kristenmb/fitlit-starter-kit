const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydration = require('../data/hydration');
const User = require('../src/User');
const users = require('./test-data/user-data');

describe('Hydration', () => {
  let user;
  let hydration;

  beforeEach((done) => {
    user = new User(users[6]);
    hydration = new Hydration(user);
  });

  //TEST for property of user

  //find the average fluid ounces consumed per day for all time
  // input: array of objects with keys userid, date, numounces
  // output: a single number - ave of all oz all time
  //method: sum of all oz for ever day divided by the number of days logged
  // // filter for our specific user
  // // reduce to a single value
  //TEST: for the given user - calcAllTimeHydrationAvg() would return a single value.

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
