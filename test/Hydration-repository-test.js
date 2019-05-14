const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/Hydration-repository');

describe('HydrationRepository', function() {

  let hydrationRepository;
  beforeEach(function() {
    hydrationRepository = new HydrationRepository(1);
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

});