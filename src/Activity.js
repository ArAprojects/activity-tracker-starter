class Activity {
  constructor(singleUserData) {
    this.userActivityData = singleUserData;
  }

  returnMilesWalkedByDate(specifedDate, userStrideLength) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return Number(((this.userActivityData.activityData[index].numSteps * userStrideLength) / 5280).toFixed(2));
  }

  returnMinutesActiveByDate(specifedDate) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData[index].minutesActive;
  }

  returnAveWeeklyActivityMinutes(specifedDate) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData.slice(index - 7, index).reduce((acc, curr) => acc += curr.minutesActive, 0);
  }

  returnStepGoalAchievement(specifedDate, userStepGoal) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData[index].numSteps > userStepGoal ? true : false;
  }

  returnTotalExceededStepGoals(userStepGoal) {
    let days = this.userActivityData.activityData.filter(day => day.numSteps > userStepGoal);
    return days.map(goals => goals.date);
  }

  returnAllTimeStairRecord() {
    return Math.max(...(this.userActivityData.activityData.map(day => day.flightsOfStairs)));
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}