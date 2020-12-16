const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const {
  activityData,
  user
} = require('./test-data/activity-data');

describe('Activity', () => {
      let activity;


      beforeEach((done) => {
        activity = new Activity(user, activityData);
        done();
      });

      it('should be an instance of Activity', () => {
        expect(activity).to.be.an.instanceof(Activity);
      });

      it('should take in a user', () => {
        expect(activity.user).to.deep.equal(user);
      });

      it('should take in a user id', () => {
        expect(activity.id).to.equal(14);
      });

      it('should take in the activity data set', () => {
        expect(activity.data).to.deep.equal(activityData);
      });

      it('should return the number of miles the user has walked', () => {
        expect(activity.findMilesWalked(user, '2019/07/14')).to.equal('5.4');
      });

      it('should return user\'s minutes active for a specific day', () => {
        expect(activity.findMinsActive('2019/07/14')).to.equal(103);
      });

      it('should return average minutes active for a given week', () => {
        expect(activity.findWeeklyAvgMins('2019/07/09')).to.equal('167');
      });

      it('should return whether the user has reached their step goal for the give day or not', () => {
        expect(activity.assessStepGoal('2019/07/12')).to.equal(true);
        expect(activity.assessStepGoal('2019/07/16')).to.equal(false);
      });

      it('should find all the day the user exceeded their step goal', () => {
        expect(activity.findStepExcess()).to.deep.equal([
          {
            userID: 14,
            date: '2019/07/12',
            numSteps: 14754,
            minutesActive: 268,
            flightsOfStairs: 3
          }
        ]);
      });

      it('should find a user\'s all-time stair climbing record', () => {
        expect(activity.findStairRecord()).to.deep.equal({
          userID: 14,
          date: '2019/07/09',
          numSteps: 2478,
          minutesActive: 149,
          flightsOfStairs: 41
        });
      });

      it('should be able to return the step count for each day over a week', () => {
        expect(activity.createWeeklyActivityLog('2019/07/09', 'numSteps')).to.deep.equal({
          'Jul 9, 2019': 2478,
          'Jul 10, 2019': 8378,
          'Jul 11, 2019': 5579,
          'Jul 12, 2019': 14754,
          'Jul 13, 2019': 4913,
          'Jul 14, 2019': 8090,
          'Jul 15, 2019': 5550
        });
      });

      it('should be able to return the flights of stairs climbed for each day over a week', () => {
          expect(activity.createWeeklyActivityLog('2019/07/09', 'flightsOfStairs')).to.deep.equal({
            'Jul 9, 2019': 41,
            'Jul 10, 2019': 39,
            'Jul 11, 2019': 5,
            'Jul 12, 2019': 3,
            'Jul 13, 2019': 7,
            'Jul 14, 2019': 9,
            'Jul 15, 2019': 26
          });
          });

        it('should be able to return the minutes active for each day over a week', () => {
          expect(activity.createWeeklyActivityLog('2019/07/09', 'minutesActive')).to.deep.equal({
            'Jul 9, 2019': 149,
            'Jul 10, 2019': 89,
            'Jul 11, 2019': 288,
            'Jul 12, 2019': 268,
            'Jul 13, 2019': 92,
            'Jul 14, 2019': 103,
            'Jul 15, 2019': 178
          });
        });
      });
