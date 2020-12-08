const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const users = require('./test-data/user-data');

describe('UserRepository', () => {
  let userRepo;

  beforeEach((done) => {
    userRepo = new UserRepository(users);
    done();
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should have a parameter to take in user data', () => {
    expect(userRepo.userData).to.deep.equal(users);
  });

  it('should be able to return a user\'s data given a user\'s id', () => {
    expect(userRepo.accessUser(2)).to.equal(users[1])
  });

  it('should be able to return the average step goal of all users', () => {
    expect(userRepo.findAllUserSteps()).to.equal(6400)
  })
});
