if (typeof require !== 'undefined') {
  var moment = require('../src/Moment');
}

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

  findOuncesByDate(date) {
    const dateData = this.data.find(item => item.date === date);
    return dateData.numOunces;
  }

  createWeeklyHydrationLog(date) {
    const index = this.data.findIndex(item => item.date === date);
    const weeklyData = this.data.slice(index, index + 7);
    const weeklyOunceLog = weeklyData.reduce((hydrationLog, day) => {
      let newDate = moment(day.date).format('ll');
      hydrationLog[newDate] = day.numOunces;
      return hydrationLog;
    }, {});
    return weeklyOunceLog;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
