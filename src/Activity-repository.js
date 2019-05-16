if (typeof module !== 'undefined') {
  Activity = require('../src/Activity');
  activityPathway = require('../data/activityRepo-test-data');
} else {
  activityPathway = activityData;
}

class ActivityRepository {
  constructor(userId) {
    this.filepathway = activityPathway;
    this.userActivityData = new Activity(this.returnActivityData(userId[0]));
    this.friend1ActivityData = new Activity(this.returnActivityData(userId[1]));
    this.friend2ActivityData = new Activity(this.returnActivityData(userId[2]));
  }

  returnActivityData(userId) {
    return this.filepathway.find(user => user.userID == userId);
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
