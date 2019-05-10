if (typeof module !== 'undefined') {
  User = require('../src/User');
  filepathway = require('../data/users-test-data');
} else {
  filepathway = userData;
}

class UserRepository {
  constructor(userId) {
    this.filepathway = filepathway;
    this.currentUser = new User(this.returnData(userId));
  }

  returnData(userId) {
    return this.filepathway.find(user => user.id == userId);
  }

  returnAveDailySteps() {
    return this.filepathway.reduce((totalSteps, singleUserSteps) => {
      return totalSteps += (singleUserSteps.dailyStepGoal / this.filepathway.length);
    }, 0);
  }

  returnMostCommonState() {
    let commonStates = this.filepathway.map(user => user.address.split(' ')[user.address.split(' ').length - 2]);
    let stateRanking = commonStates.reduce((acc, curr) => {
      !acc[curr] ? acc[curr] = 1 : acc[curr]++;
    return acc;
    }, {});
  return Object.entries(stateRanking).sort((a, b) => a[1] - b[1]).pop()[0];
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
