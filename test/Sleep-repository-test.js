const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/Sleep-repository');

describe('SleepRepository', function() {

  let sleepRepository;
  beforeEach(function() {
    sleepRepository = new SleepRepository();
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
    expect(sleepRepository.returnSleepQualityGreaterThan3fForWeek('07/07/2019')).to.eql([ [ 1, 3.6 ], [ 2, 3.5 ] ]);
  });

  it('should have a method that returns, for a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)', function() {
    expect(sleepRepository.returnHeaviestSleeperByDate('07/07/2019')).to.eql([ [ 2, 7.6 ] ]);
  });

  it('should have a method that returns the average hours slept for all users', function() {
    expect(sleepRepository.returnAveHoursSleptForAllUsers()).to.eql(7.6);
  });

});
