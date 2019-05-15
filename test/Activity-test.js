const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const singleUserData = require('../data/activity-test-data');

describe('Activity', function() {

  let activity;
  beforeEach(function() {
    activity = new Activity(singleUserData);
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

  it('should have a method that returns how many flights of stairs climbed for a given day specified by a date', function() {
    expect(activity.returnStairsClimbedByDate("14/07/2019")).to.equal(22);
  });

  it('should have a method that returns how many minutes active did they average for a given week (7 days)', function() {
    expect(activity.returnAveWeeklyActivityMinutes("14/07/2019")).to.equal(1140);
  });

  it('should have a method that returns whether they reached their step goal for a given day (specified by a date)', function() {
    expect(activity.returnStepGoalAchievement("14/07/2019", 8000)).to.equal(true);
  });

  it('should have a method that returns all the days they exceeded their step goal', function() {
    expect(activity.returnTotalExceededStepGoals(14500)).to.eql([ '19/05/2019' ]);
  });

  it('should have a method that returns their all-time stair climbing record', function() {
    expect(activity.returnAllTimeStairRecord()).to.eql(50);
  });

  it('should have a method that returns their step count for a week', function() {
    expect(activity.returnWeeklyStepCount('25/05/2019')).to.eql(65064);
  });

  it('should have a method that shows what days had increasing steps for 3 or more days', function() {
    expect(activity.returnIncreasingStepTrend()).to.eql([]);
  });

});