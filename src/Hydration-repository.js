if (typeof module !== 'undefined') {
  Hydration = require('../src/Hydration');
  hydrationPathway = require('../data/hydrationRepo-test-data');
} else {
  hydrationPathway = hydrationData;
}

class HydrationRepository {
  constructor(userId) {
    this.filepathway = hydrationPathway;
    this.userHydrationData = new Hydration(this.returnHydrationData(userId));
  }

  returnHydrationData(userId) {
    return this.filepathway.find(user => user.userID == userId);
  }

}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
