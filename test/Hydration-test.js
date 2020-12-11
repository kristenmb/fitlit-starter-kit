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

  it('should find the fluid ounces consumed on a specific day', () => {
    expect(hydration.findOuncesByDate('2019/06/17')).to.equal(99);
  });

  it('should return the fluid ounces consumed for each day over a week', () => {
    expect(hydration.createWeeklyHydrationLog('2019/06/15')).to.deep.equal({
  '2019/06/15': 42,
  '2019/06/16': 79,
  '2019/06/17': 99,
  '2019/06/18': 39,
  '2019/06/19': 69,
  '2019/06/20': 89,
  '2019/06/21': 73
    });
  });
});
