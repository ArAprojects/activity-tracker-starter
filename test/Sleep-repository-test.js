const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/Sleep-repository');
const Sleep = require('../src/Sleep');

describe('SleepRepository', function() {

  let sleepRepository;
  beforeEach(function() {
    sleepRepository = new SleepRepository(1);
  })

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

});