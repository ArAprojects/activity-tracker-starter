if (typeof module !== 'undefined') {
  userHyrdationData = require('../data/hydration-test-data');
}

class Hydration {
  constructor(userHyrdationData) {
    this.userID = userHyrdationData.userID;
    this.hydrationData = userHyrdationData.hydrationData;
  }

  returnAveDailyOz() {
    return this.hydrationData.reduce((acc, curr) => {
      acc += curr.numOunces / this.hydrationData.length;
      return Math.round(acc);
    }, 0);
  }

  returnOzByDate(specificDate) {
    return this.hydrationData.find(day => day.date == specificDate).numOunces;
  }

  returnWeeklyOz(specificDate) {
    let index = this.hydrationData.findIndex(day => day.date == specificDate);
    let weekData = this.hydrationData.slice(index - 6, index + 1);
    return weekData.map(day => day.numOunces);
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}