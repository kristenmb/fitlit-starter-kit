class SleepRepo {
    constructor(allSleepData) {
        this.data = allSleepData;
    }

    findAllUserAvg() {
        const overallAvg = this.data.reduce((hourAvg, item) => {
            hourAvg += item.hoursSlept;
            return hourAvg;
        }, 0)
        return ((overallAvg / this.data.length).toFixed(1));
    };

    findQualitySleepers(date) {
        const index = this.data.findIndex(item => item.date === date);
        const weeklyData = this.data.slice(index, index + 7);
        const 
    }
}


if (typeof module !== 'undefined') {
    module.exports = SleepRepo;
  };