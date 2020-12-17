class ActivityRepo {
  constructor(data) {
    this.data = data;
  }

  findDailyAvg(property, date) {
    const findDate = this.data.filter(item => item.date === date);
    const avgActivity = findDate.reduce((avg, day) => {
      avg += day[property];
      return avg;
    }, 0)

    return (avgActivity / findDate.length).toFixed(0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
