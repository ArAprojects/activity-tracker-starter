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

  returnStairsClimbedByDate(specifedDate) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData[index].flightsOfStairs;
  }

  returnAveWeeklyActivityMinutes(specifedDate) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData.slice(index - 6, index + 1).reduce((acc, curr) => acc += curr.minutesActive, 0);
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

  returnWeeklyStepCount(specifedDate) {
    let index = this.userActivityData.activityData.findIndex(day => day.date == specifedDate);
    return this.userActivityData.activityData.slice(index - 6, index + 1).reduce((acc, curr) => acc += curr.numSteps, 0);
  }

  returnIncreasingStepTrend() {
    var streak = [];
    var streakDates = [];
    var userStepData = this.userActivityData.activityData;
    userStepData.forEach(user => {
      if (streak.length >= 3) {
        streak.shift();
      }
      streak.push(user.numSteps);
      if (streak[2] > streak[1] && streak[1] > streak[0]) {
        streakDates.push(user.date);
      }
    });
    return streakDates;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}