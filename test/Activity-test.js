const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', () => {
      let activity;
      let activityData;
      let user;

      beforeEach((done) => {
        activityData = [{
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
        user = {
          "id": 14,
          "name": "Gloria Frami",
          "address": "326 Littel Run, Tracemouth HI 02826-6898",
          "email": "Jadon.OConnell@hotmail.com",
          "strideLength": 3.5,
          "dailyStepGoal": 12000,
          "friends": [
            34,
            22
          ]
        };
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
        expect(activity.findStepExcess()).to.deep.equal([{
          "date": "2019/07/12",
          "flightsOfStairs": 3,
          "minutesActive": 268,
          "numSteps": 14754,
          "userID": 14
        }]);
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
          '2019/07/09': 2478,
          '2019/07/10': 8378,
          '2019/07/11': 5579,
          '2019/07/12': 14754,
          '2019/07/13': 4913,
          '2019/07/14': 8090,
          '2019/07/15': 5550
        });
      });

      it('should be able to return the flights of stairs climbed for each day over a week', () => {
          expect(activity.createWeeklyActivityLog('2019/07/09', 'flightsOfStairs')).to.deep.equal({
              '2019/07/09': 41,
              '2019/07/10': 39,
              '2019/07/11': 5,
              '2019/07/12': 3,
              '2019/07/13': 7,
              '2019/07/14': 9,
              '2019/07/15': 26
            });
          });

        it('should be able to return the minutes active for each day over a week', () => {
          expect(activity.createWeeklyActivityLog('2019/07/09', 'minutesActive')).to.deep.equal({
            '2019/07/09': 149,
            '2019/07/10': 89,
            '2019/07/11': 288,
            '2019/07/12': 268,
            '2019/07/13': 92,
            '2019/07/14': 103,
            '2019/07/15': 178
          });
        });
      });
