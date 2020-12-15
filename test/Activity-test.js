const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', () => {
    let activity;
    let activityData;
    let user;

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

    


    
    // 2. How many minutes active for a specific day
    // Input: Array of activity objects
    // Output: A number (minutes)
    // Methods: Find
    // Find the object by the specific date
    // return the objects minsActive property
    // 
    // 3. How many minutes active did they average for a given week
    // Input: Array of activity objects
    // Output: A number (average of minsActive)
    // Methods: Reduce
    // Sum the minsActive for a given week
    // Divide by 7 
    // 
    // 4. Did the user reach their step goal for a given day 
    // Input: Array of activity objects
    // output: Boolean 
    // Compare to userData and stepGoal
    // Are their steps greater than or equal to the step goal??
    //
    // 5. Find all the days they exceeded their step goal
    // Input: Array of activity objects 
    // Output: Array of days 
    // Methods: Filter
    // Filter the array and find the days that are greater than the 
    // step goal
    //
    // 6. Find their all time stair climbing record
    // Input: Array of activity objects
    // Output: A number (flightsOfStairs)
    // Methods: Sort
    // Sort the array by flightsOfStairs value 
    // from b - a (highest to lowest) 
    // return the first index
    
});
