const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationData = require('./test-data/hydration-data');

describe('Hydration', () => {
  let hydration;

  beforeEach((done) => {
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
      'Jun 15, 2019': 42,
      'Jun 16, 2019': 79,
      'Jun 17, 2019': 99,
      'Jun 18, 2019': 39,
      'Jun 19, 2019': 69,
      'Jun 20, 2019': 89,
      'Jun 21, 2019': 73
    });
  });
});
