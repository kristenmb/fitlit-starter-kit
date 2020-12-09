const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const users = require('./test-data/user-data');

describe('User', () => {
    let user;
    let user1;
    
    beforeEach((done) => {
        user = new User(users[0]);
        user1 = new User(users[3]);
        done();
    });

    it('should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', () => {
        expect(user).to.be.an.instanceof(User);
    });

    it('should be able to access the user id', () => {
        expect(user.id).to.equal(1);
        expect(user1.id).to.equal(4);
    });

    it('should be able to access the user name', () => {
        expect(user.name).to.equal('Luisa Hane');
        expect(user1.name).to.equal('Mae Connelly');
    });

    it('should be able to access the user address', () => {
        expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
        expect(user1.address).to.equal('28926 Schinner Islands, Turnermouth NE 23720-3230');
    });

    it('should be able to access the user email', () => {
        expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
        expect(user1.email).to.equal('Marcos_Pollich@hotmail.com');
    });

    it('should be able to access the user stride length', () => {
        expect(user.strideLength).to.equal(4.3);
        expect(user1.strideLength).to.equal(3.1);
    });

    it('should be able to access the user daily step goal', () => {
        expect(user.dailyStepGoal).to.equal(10000);
        expect(user1.dailyStepGoal).to.equal(4000);
    });

    it('should be able to access the user\'s friends', () => {
        expect(user.friends).to.deep.equal([16,4,8]);
        expect(user1.friends).to.deep.equal([48,7,44,8]);
    });

    it('should be able to return the user\'s first name', () => {
        expect(user.accessUserName()).to.equal('Luisa');
        expect(user1.accessUserName()).to.equal('Mae');
    });
});
