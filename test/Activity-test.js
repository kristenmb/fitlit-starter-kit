const chai = require('chai');
const expect = chai. expect;

const Activity = require('../src/Activity');

describe('Activity', () => {
    let activity;
    let activityData;

    beforeEach((done) => {
        activityData = [
            {
              userID: 14,
              date: '2019/07/09',
              numSteps: 2478,
              minutesActive: 149,
              flightsOfStairs: 41
            },
            {
              userID: 14,
              date: '2019/07/10',
              numSteps: 8378,
              minutesActive: 89,
              flightsOfStairs: 39
            },
            {
              userID: 14,
              date: '2019/07/11',
              numSteps: 5579,
              minutesActive: 288,
              flightsOfStairs: 5
            },
            {
              userID: 14,
              date: '2019/07/12',
              numSteps: 14754,
              minutesActive: 268,
              flightsOfStairs: 3
            },
            {
              userID: 14,
              date: '2019/07/13',
              numSteps: 4913,
              minutesActive: 92,
              flightsOfStairs: 7
            },
            {
              userID: 14,
              date: '2019/07/14',
              numSteps: 8090,
              minutesActive: 103,
              flightsOfStairs: 9
            },
            {
              userID: 14,
              date: '2019/07/15',
              numSteps: 5550,
              minutesActive: 178,
              flightsOfStairs: 26
            },
            {
              userID: 14,
              date: '2019/07/16',
              numSteps: 4617,
              minutesActive: 71,
              flightsOfStairs: 34
            }
          ];
        activity = new Activity(14, activityData);
        done();
    });

    it('should be an instance of Activity', () => {
        expect(activity).to.be.an.instanceof(Activity);
    });

    it('should take in a user id', () => {
        expect(activity.id).to.equal(14);
    });

    it('should take in the activity data set', () => {
        expect(activity.data).to.deep.equal(activityData);
    });

    
});
