if (typeof module !== 'undefined') {
  Sleep = require('../src/Sleep');
  sleepPathway = require('../data/sleep-test-data');
} else {
  sleepPathway = sleepData;
}

class SleepRepository {
  constructor(userId) {
    this.filepathway = sleepPathway;
    this.userSleepData = new Sleep();
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}