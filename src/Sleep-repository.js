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
    return this.filepathway.find(user => user.userID == userId);
  }

  returnAveSleepQualityForAllUsers() {
    return Number(this.filepathway.reduce((aveUserSleepQual, user) => {
      return aveUserSleepQual += user.sleepData.reduce((totalQual, dailyQual) => {
        return totalQual += dailyQual.sleepQuality / user.sleepData.length;
      }, 0) / this.filepathway.length;
    }, 0).toFixed(1));
  }

  returnSleepQualityGreaterThan3ForWeek(searchDate) {
    let indexes = this.filepathway.map(user => user.sleepData.findIndex(day => day.date === searchDate));
    let result = this.filepathway.reduce((acc, user, idx) => {
      let weekSleepData = user.sleepData.slice(indexes[idx] - 6, indexes[idx] + 1);
      let totalSleepQuality = weekSleepData.reduce((acc, data) => {
        return acc += data.sleepQuality;
      }, 0);
      let averageSleepQuality = totalSleepQuality / 7;
      if(averageSleepQuality >= 3) {
        acc.push([
          user.userID, 
          parseFloat(averageSleepQuality.toFixed(2))
        ]);
      }
      return acc;
    }, []);
    return result.length ? result : 'No such users';
  }

  returnHeaviestSleeperByDate(searchDate) {
    let ids = [], hoursSlept = [], finalUsers = [];
    this.filepathway.forEach(user => {
      ids.push(user.userID);
      user.sleepData.forEach(day => {
        if (day.date === searchDate) {
          hoursSlept.push(day.hoursSlept);
        }
      });
    });
    let maxHours = Math.max(...hoursSlept);
    hoursSlept.forEach((el, i) => {
      if (el === maxHours) {
        finalUsers.push([ids[i], el]);
      }
    });
    return finalUsers;
  }

  returnAveHoursSleptForAllUsers() {
    return Number(this.filepathway.reduce((aveUserHoursSlept, user) => {
      return aveUserHoursSlept += user.sleepData.reduce((totalHoursSlept, dailyHoursSlept) => {
        return totalHoursSlept += dailyHoursSlept.hoursSlept / user.sleepData.length;
      }, 0) / this.filepathway.length;
    }, 0).toFixed(1));
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
