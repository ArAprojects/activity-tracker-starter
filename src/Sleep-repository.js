if (typeof module !== 'undefined') {
  Sleep = require('../src/Sleep');
  sleepPathway = require('../data/sleepRepo-test-data');
} else {
  sleepPathway = sleepData;
}

class SleepRepository {
  constructor(userId) {
    this.filepathway = sleepPathway;
    this.userSleepData = new Sleep(this.returnSleepData(userId));
  }

  returnSleepData(userId) {
    return this.filepathway.find(sleepUser => sleepUser.userID == userId);
  }

  returnAveSleepQualityForAllUsers() {
    return Number(this.filepathway.reduce((aveUserSleepQual, user) => {
      return aveUserSleepQual += user.sleepData.reduce((totalQual, dailyQual) => {
        return totalQual += dailyQual.sleepQuality / user.sleepData.length;
      }, 0) / this.filepathway.length;
    }, 0).toFixed(1));
  }

  returnSleepQualityGreaterThan3fForWeek(searchDate) {
    let dateIndex = sleepData.map(user => user.sleepData.findIndex(day => day.date == searchDate));
    let weeklyData = sleepData.map(user => user.sleepData.slice(dateIndex[0], dateIndex[0] + 7));
    let weeklySleepQual = weeklyData.map(user => user.map(day => day.sleepQuality));
    let totalSleepQual = weeklySleepQual.map(user => user.reduce((acc, curr) => acc += curr), 0);
    let aveSleepQual = totalSleepQual.map(user => user / 7);
    return aveSleepQual.reduce((acc, curr, index) => {
      if (curr > 3) {
        acc.push([index + 1, Number(curr.toFixed(1))]);
      }
      return acc;
    }, []);
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}