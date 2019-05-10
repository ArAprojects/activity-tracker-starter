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

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}