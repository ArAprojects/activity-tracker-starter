const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepTestData = require('../data/sleep-test-data');

describe('Sleep', function() {

  let sleep;
  beforeEach(function() {
    sleep = new Sleep(sleepTestData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should have a method that returns the average number of hours slept per day', function() {
    expect(sleep.returnAveDailySleepHours()).to.equal(7.5);
  });

  it('should have a method that returns their average sleep quality per day over all time', function() {
    expect(sleep.returnAveSleepQual()).to.equal(3.0);
  });

  it('should have a method that returns how many hours they slept for a specific day (identified by a date)', function() {
    expect(sleep.returnHoursSleptByDate('07/05/2019')).to.equal(10.7);
  });

  it('should have a method that returns how many hours slept each day over the course of a given 7 day week', function() {
    expect(sleep.returnWeekOfHoursByDate('28/07/2019')).to.eql([ 8.1, 4.3, 5.7, 9.5, 4.4, 7.4, 10.1 ]);
  });

  it('should have a method that returns their sleep quality each day over the course of a given 7 day week', function() {
    expect(sleep.returnWeekOfQualityByDate('28/07/2019')).to.eql([ 1.4, 3, 2.9, 2.1, 4.8, 2.1, 2.9 ]);
  });

  it('should have a method that returns what days had sleep quality over 3 for 3 or more days', function() {
    expect(sleep.returnRegularGoodSleepTrend()).to.eql([ '10/05/2019',
    '16/05/2019',
    '17/05/2019',
    '25/05/2019',
    '26/05/2019',
    '10/06/2019',
    '11/06/2019',
    '03/07/2019',
    '08/07/2019',
    '09/07/2019' ]);
  });

});
