let hydrationPathway = {}

if (typeof module !== 'undefined') {
  Hydration = require('../src/Hydration');
  hydrationPathway = require('../data/hydration-test-data');
} else {
  hydrationPathway = hydrationData;
}

class HydrationRepository {
  constructor(userId) {
    this.filepathway = hydrationPathway;
    this.userHydrationData = new Hydration(this.returnHydrationData(userId));
  }

  returnHydrationData(userId) {
    return this.filepathway.find(hydrationObj => hydrationObj.userID == userId);
  }

  returnAveDailyOz() {
    return this.userHydrationData.hydrationData.reduce((acc, curr) => {
      acc += curr.numOunces / this.userHydrationData.hydrationData.length;
      return Math.round(acc);
    }, 0);
  }

  returnOzByDate(specificDate) {
    return this.userHydrationData.hydrationData.find(day => day.date == specificDate).numOunces;
  }

  returnWeeklyOz(specificDate) {
    let index = this.userHydrationData.hydrationData.findIndex(day => day.date == specificDate);
    let weekData = this.userHydrationData.hydrationData.slice(index, index + 7);
    return weekData.reduce((acc, curr) => {
      acc += curr.numOunces;
      return acc;
    }, 0);
  }

}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
