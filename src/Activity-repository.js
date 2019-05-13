if (typeof module !== 'undefined') {
  Activity = require('../src/Sleep');
  activityPathway = require('../data/activity-test-data');
} else {
  activityPathway = activityData;
}

class SleepRepository {
  constructor(userId) {
    this.filepathway = activityPathway;
    this.userSleepData = new Activity(this.returnActivityData(userId));
  }

  returnActivityData(userId) {
    return this.filepathway.find(sleepUser => sleepUser.userID == userId);
  }

  

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}