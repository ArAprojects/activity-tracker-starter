const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/Hydration-repository');
const hydrationTestData = require('../data/hydration-test-data')
const Hydration = require('../src/Hydration');

describe('HydrationRepository', function() {

  let hydrationRepository;
  beforeEach(function() {
    hydrationRepository = new HydrationRepository(hydrationTestData, 1);
  })

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should be an instance of Hydration', function() {
    expect(hydrationRepository.userHydrationData).to.be.an.instanceof(Hydration);
  });

  it('should have be connected to test data file', function() {
    expect(hydrationTestData[0].userID).to.eql(1);
  });

  it('should tell how many ounces a user consumed per day on average', function() {
    expect(hydrationRepository.returnAveDailyOz()).to.eql(55);
  })

  it('should tell how many ounces consumed for a specific day', function() {
    expect(hydrationRepository.returnOzByDate("07/05/2019")).to.eql(80);
  })

  it('should tell how many ounces consumed for a week', function() {
    expect(hydrationRepository.returnWeeklyOz("06/05/2019")).to.eql(405);
  })

});
