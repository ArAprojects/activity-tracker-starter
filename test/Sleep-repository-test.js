const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/Sleep-repository');
const sleepTestData = require('../data/sleepRepo-test-data');

describe('SleepRepository', function() {

  let sleepRepository;
  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepTestData);
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should have a method that returns the average sleep quality for all users', function() {
    expect(sleepRepository.returnAveSleepQualityForAllUsers()).to.equal(3.1);
  });

  it('should have a method that returns all users whos average sleep quality is greater than 3 for a given 7 day week', function() {
    expect(sleepRepository.returnSleepQualityGreaterThan3fForWeek()).to.eql();
  });

});