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

  returnSleepQualityGreaterThan3fForWeek() {
    let a = sleepData.map(user => user.sleepData.findIndex(day => day.date == searchDate));
    console.log('a', a);
    let b = sleepData.map(user => user.sleepData.slice(a[0], a[0] + 7));
    console.log('b', b);
    let c = b.map(user => user.map(day => day.sleepQuality));
    console.log('c', c);
    let d = c.map(user => user.reduce((acc, curr) => acc += curr), 0);
    console.log('d', d);
    let e = d.map(user => user / 7);
    console.log('e', e)
    let f = e.reduce((acc, curr, index) => {
      if (curr > 3) {
        acc.push(index + 1);
      }
      return acc;
    }, []);
    console.log('f', f)
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}