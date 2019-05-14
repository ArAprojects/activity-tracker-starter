const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', function() {

  let user
  beforeEach(function() {
    user = new User({
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    });
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have properties', function() {
    expect(user.currentUserData.id).to.eql(1);
    expect(user.currentUserData.name).to.eql('Nyasia Weber');
    expect(user.currentUserData.strideLength).to.eql(4.7);
  });

  it('should be able to return a user\'s first name only', function() {
    expect(user.returnFirstName()).to.equal('Nyasia');
  });

  it('should have a method that returns the user\'s stride length', function() {
    expect(user.returnStrideLength()).to.equal(4.7);
  });

  it('should have a method that returns the user\'s daily step goal', function() {
    expect(user.returnDailyStepGoal()).to.equal(8000);
  });

});