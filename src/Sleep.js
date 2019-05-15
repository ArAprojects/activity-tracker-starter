class Sleep {
  constructor(data) {
    this.userSleepData = data;
  }

  returnAveDailySleepHours() {
    return Number(this.userSleepData.sleepData.reduce((acc, curr) => {
      acc += curr.hoursSlept / 100;
      return acc;
    }, 0).toFixed(1));
  }

  returnAveSleepQual() {
    return Number(this.userSleepData.sleepData.reduce((acc, curr) => {
      acc += curr.sleepQuality / 100;
      return acc;
    }, 0).toFixed(1));
  }

  returnHoursSleptByDate(searchDate) {
    return this.userSleepData.sleepData.find(day => day.date == searchDate).hoursSlept;
  }

  returnWeekOfHoursByDate(searchDate) {
    let index = this.userSleepData.sleepData.findIndex(day => day.date == searchDate);
    let weekData = this.userSleepData.sleepData.slice(index - 6, index + 1);
      return weekData.map(day => day.hoursSlept);
  }

  returnWeekOfQualityByDate(searchDate) {
    let index = this.userSleepData.sleepData.findIndex(day => day.date == searchDate);
    let weekData = this.userSleepData.sleepData.slice(index - 6, index + 1);
      return weekData.map(day => day.sleepQuality);
  }

  returnRegularGoodSleepTrend() {
    let goodSleepStreak = [];
    let goodSleepStreakDates = [];
    let userSleepData = this.userSleepData.sleepData;
    userSleepData.forEach(user => {
      if (goodSleepStreak.length >= 3) {
        goodSleepStreak.shift();
      }
      goodSleepStreak.push(user.sleepQuality);
      if (goodSleepStreak[2] > goodSleepStreak[1] && goodSleepStreak[1] > goodSleepStreak[0]) {
        goodSleepStreakDates.push(user.date);
      }
    });
    return goodSleepStreakDates;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}