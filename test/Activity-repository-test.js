const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/Activity-repository');

describe('ActivityRepository', function() {

  let activityRepository;
  beforeEach(function() {
    activityRepository = new ActivityRepository();
  });

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('should have a method that returns for all users the average number of stairs climbed for a specified date', function() {
    expect(activityRepository.returnAveStairsClimbedByDate('05/07/2019')).to.equal(15.5);
  });

  it('should have a method that returns for all users the average number of steps taken for a specific date', function() {
    expect(activityRepository.returnAveStepsByDate('05/07/2019')).to.equal(8268);
  });
  
  it('should have a method that returns for all users the average minutes active for a specific date', function() {
    expect(activityRepository.returnAveActivityTimeByDate('05/07/2019')).to.equal(116.5);
  });

  it('should have a method that returns for all users the average elevation gain (via flights of stairs according to the Stairway Manufacturers Association - i.e., 12 feet per flight) for a specific date', function() {
    expect(activityRepository.returnAveElevationGain('05/07/2019')).to.equal(120);
  });

});