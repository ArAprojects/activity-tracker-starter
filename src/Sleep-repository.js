if (typeof module !== 'undefined') {
  Sleep = require('../src/Sleep');
  sleepPathway = require('../data/hydration-test-data');
} else {
  sleepPathway = sleepData;
}

class SleepRepository {
  constructor() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}