const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', () => {

});


//holds all user objects
//should have a parameter to take in user data
// // // data parameter is the userdata array of objects.
// TEST: an instantiation of UserRepository has a property that holds the array of user info

//should have a method to:
// // // gievn user id what is their user data
// // // // user data will be their id, name, address, email, strideLength, dailyStepGoal, friends lists
// // // // // TEST: put in specific id, return correct object of data for that user
// // // average step goal amongst all users
// // // // .map() or .reduce() to return average step goal of all users
// // // // // TEST: calling the method returns the average step count
