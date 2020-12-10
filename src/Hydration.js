class Hydration {
  constructor(id, data) {
    this.id = id;
    this.data = data.filter(item => item.userID === this.id);
  }

  calcAllTimeHydrationAvg() {
    let totalOz = this.data.reduce((acc, day) => {
      acc += day.numOunces
      return acc;
    }, 0);
    
    return Math.floor(totalOz / this.data.length);
  }
}


if (typeof module !== 'undefined') {
    module.exports = Hydration;
};
