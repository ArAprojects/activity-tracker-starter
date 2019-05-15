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
    expect(activity.returnMilesWalkedWeeklyByDate("13/08/2019", 4.2)).to.eql([ 3.71, 5.64, 7.65, 2.03, 6.88, 7.81, 11.15 ]);
  });

  it('should have a method that returns how many minutes were they active for a given day specified by a date', function() {
    expect(activity.returnMinutesActiveByDate("14/07/2019")).to.equal(262);
  });

  it('should have a method that returns how many minutes were they active for a given day specified by a date', function() {
    expect(activity.returnUserStepsByDate("14/07/2019")).to.equal(9881);
  });

  it('should have a method that returns how many minutes were they active for a given day specified by a date', function() {
    expect(activity.returnMilesWalkedByDate("13/08/2019", 4.2)).to.equal(11.15);
  });

  it('should have a method that returns how many minutes were they active for a given day specified by a date', function() {
    expect(activity.returnFlightsOfStairsByDate("13/08/2019")).to.equal(38);
  });

  it('should have a method that returns how many flights of stairs climbed for a given day specified by a date', function() {
    expect(activity.returnFlightsOfStairsWeeklyByDate("13/08/2019")).to.eql([ 1.6, 2.4, 3.6, 4.8, 1.5, 1, 3.8 ]);
  });

  it('should have a method that returns how many minutes active did they average for a given week (7 days)', function() {
    expect(activity.returnAveWeeklyActivityHours("13/08/2019")).to.eql([ 3.67, 0.43, 3.23, 1.98, 1.67, 4.72, 1.3 ]);
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
    expect(activity.returnIncreasingStepTrend()).to.eql([ '10/05/2019',
    '15/05/2019',
    '16/05/2019',
    '19/05/2019',
    '29/05/2019',
    '01/06/2019',
    '06/06/2019',
    '07/06/2019',
    '19/06/2019',
    '05/07/2019',
    '14/07/2019',
    '15/07/2019',
    '24/07/2019',
    '06/08/2019',
    '09/08/2019',
    '12/08/2019',
    '13/08/2019' ]);
  });

});