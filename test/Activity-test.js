const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const activityTestData = require('../data/activity-test-data');

describe('Activity', function() {

  let activity;
  beforeEach(function() {
    activity = new Activity(activityTestData);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should have a method that returns the miles a user has walked based on their number of steps given a specified date', function() {
    expect(activity.returnMilesWalkedByDate("14/07/2019", 4.5)).to.equal(8.42);
  });

  it('should have a method that returns how many minutes were they active for a given day specified by a date', function() {
    expect(activity.returnMinutesActiveByDate("14/07/2019")).to.equal(262);
  });

});