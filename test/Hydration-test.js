const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const userHyrdationData = require('../data/hydration-test-data');

describe('Hydration', function() {

  let hydration;
  beforeEach(function() {
    hydration = new Hydration(userHyrdationData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should tell how many ounces a user consumed per day on average', function() {
    expect(hydration.returnAveDailyOz()).to.eql(55);
  });

  it('should tell how many ounces consumed for a specific day', function() {
    expect(hydration.returnOzByDate('07/05/2019')).to.eql(80);
  });

  it('should tell how many ounces consumed for a week', function() {
    expect(hydration.returnWeeklyOz('15/05/2019')).to.eql([ 40, 65, 84, 33, 60, 30, 59 ]);
  });

});