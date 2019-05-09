class Hydration {
  constructor(data) {
    this.userID = data.userID;
    this.hydrationData = data.hydrationData;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
