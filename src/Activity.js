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
    let moreStepsStreak = [];
    let moreStepsStreakDates = [];
    let userStepData = this.userActivityData.activityData;
    userStepData.forEach(user => {
      if (moreStepsStreak.length >= 3) {
        moreStepsStreak.shift();
      }
      moreStepsStreak.push(user.numSteps);
      if (moreStepsStreak[2] > moreStepsStreak[1] && moreStepsStreak[1] > moreStepsStreak[0]) {
        moreStepsStreakDates.push(user.date);
      }
    });
    return moreStepsStreakDates;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}