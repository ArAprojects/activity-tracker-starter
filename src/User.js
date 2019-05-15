class User {
  constructor(currentUserData) {
    this.currentUserData = currentUserData;
  }

  returnFirstName() {
    return this.currentUserData.name.split(' ')[0];
  }

  returnStrideLength() {
    return this.currentUserData.strideLength;
  }

  returnDailyStepGoal() {
    return this.currentUserData.dailyStepGoal;
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}