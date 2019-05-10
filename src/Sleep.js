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

  returnHoursSleptByDate(date) {
    return this.userSleepData.sleepData.find(day => day.date == date).hoursSlept;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}