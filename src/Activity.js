class Activity {
    constructor(user, data) {
        this.user = user;
        this.id = user.id;
        this.data = data;
    }

    findMilesWalked(user, date) {
        const dayActivity = this.data.find(item => item.date === date);
        return ((dayActivity.numSteps * user.strideLength) / 5280).toFixed(1);
    }

    findMinsActive(date) {
        const minsActive = this.data.find(item => item.date === date);
        return minsActive.minutesActive;
    }

    findWeeklyAvgMins(date) {
        const index = this.data.findIndex(item => item.date === date);
        const weeklyData = this.data.slice(index, index + 7);
        const weeklyAvg = weeklyData.reduce((activeAvg, day) => {
            activeAvg += day.minutesActive / 7;
            return activeAvg;
        }, 0)
        return weeklyAvg.toFixed(0);
    }
};

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };
