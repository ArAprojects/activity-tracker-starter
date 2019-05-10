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

});