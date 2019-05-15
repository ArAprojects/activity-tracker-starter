const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/User-repository');
const usersTestData = require('../data/users-test-data');
const User = require('../src/User');

describe('UserRepository', function() {
  let userRepository
  beforeEach(function() {
    userRepository = new UserRepository(usersTestData, 1);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of userRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should be an instance of user', function() {
    expect(userRepository.currentUser).to.be.an.instanceof(User);
  });

  it('should have be connected to test data file', function() {
    expect(usersTestData[0].id).to.eql(1);
  });

  it('should have a method that returns a users data from their id', function() {
    expect(userRepository.returnData(1)).to.eql(usersTestData[0]);
  });

  it('it should have a method that shows average daily step goal of all users', function () {
    expect(userRepository.returnAveDailySteps()).to.eql(8400);
  });

  it('it should have a method that shows most common state of users', function () {
    expect(userRepository.returnMostCommonState()).to.eql('AR');
  });

});
