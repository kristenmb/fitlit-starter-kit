const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');
const {activityRepoData} = require('./test-data/activity-data');

describe('ActivityRepo', () => {
  let activityRepo;

  beforeEach((done) => {
    activityRepo = new ActivityRepo(activityRepoData)
    done();
  });

  it('should be an instance of ActivityRepo', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepo);
  });

  it('should take in activity data', () => {
    expect(activityRepo.data).to.deep.equal(activityRepoData);
  });

  it('should be able to find average number of stairs climbed for all users on a specific day', () => {
    expect(activityRepo.findDailyAvg('flightsOfStairs', '2019/06/15')).to.equal('24');
  });

  it('should be able to find average number of steps taken for all users on a specific day', () => {
    expect(activityRepo.findDailyAvg('numSteps', '2019/06/15')).to.equal('8386');
  });

  it('should be able to find average minutes active for all users on a specific day', () => {
    expect(activityRepo.findDailyAvg('minutesActive', '2019/06/15')).to.equal('156');
  });
});
