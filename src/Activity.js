class Activity {
  constructor(data) {
    this.userActivityData = data;
  }

  returnAveDailyActivity(specifedDate, userStrideLength) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return Number(((activityData.activityData[index].numSteps * userStrideLength) / 5280).toFixed(2));
  }

  returnMinutesActiveByDate(specifedDate) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData[index].minutesActive;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}