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

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}