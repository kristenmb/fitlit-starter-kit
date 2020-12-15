const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');
const activityData = require('../data/activity');

describe('ActivityRepo', () => {
  let activityRepo;

  beforeEach((done) => {
    activityRepo = new ActivityRepo(activityData)
    done();
  });

  it('should be an instance of ActivityRepo', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepo);
  });

  it('should take in activity data', () => {
    expect(activityRepo.data).to.deep.equal(activityData);
  })
})
