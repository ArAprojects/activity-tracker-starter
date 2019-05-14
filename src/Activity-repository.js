if (typeof module !== 'undefined') {
  Activity = require('../src/Sleep');
  activityPathway = require('../data/activity-test-data');
} else {
  activityPathway = activityData;
}

class ActivityRepository {
  constructor(userId) {
    this.filepathway = activityPathway;
    this.userSleepData = new Activity(this.returnActivityData(userId));
  }

  returnActivityData(userId) {
    return this.filepathway.find(activityUser => activityUser.userID == userId);
  }

  returnAveStairsClimbedByDate(specificDate) {
    let total = [];
    this.filepathway.forEach(user => user.activityData.forEach(day => {
      if (day.date === specificDate) {
        total.push(day.flightsOfStairs);
      }
    }));
    return (total.reduce((acc, curr) => acc += curr)) / total.length;
  }

  returnAveStepsByDate(specificDate) {
    let total = [];
    this.filepathway.forEach(user => user.activityData.forEach(day => {
      if (day.date === specificDate) {
        total.push(day.numSteps);
      }
    }));
    return (total.reduce((acc, curr) => acc += curr)) / total.length;
  }

  returnAveActivityTimeByDate(specificDate) {
    let total = [];
    this.filepathway.forEach(user => user.activityData.forEach(day => {
      if (day.date === specificDate) {
        total.push(day.minutesActive);
      }
    }));
    return (total.reduce((acc, curr) => acc += curr)) / total.length;
  }

  returnAveElevationGain(specificDate) {
    let total = [];
    this.filepathway.forEach(user => user.activityData.forEach(day => {
      if (day.date === specificDate) {
        total.push(day.flightsOfStairs);
      }
    }));
    return (total.reduce((acc, curr) => acc += (curr * 12))) / total.length;
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}