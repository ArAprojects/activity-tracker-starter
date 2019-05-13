const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/Activity-repository');
const activityTestData = require('../data/activity-test-data');

describe('ActivityRepository', function() {

  let activityRepository;
  beforeEach(function() {
    activityRepository = new ActivityRepository(activityTestData);
  });

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(ActivityRepository).to.be.an.instanceof(SleepRepository);
  });


});