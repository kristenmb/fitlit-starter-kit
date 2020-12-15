class Activity {
    constructor(user, data) {
        this.user = user;
        this.id = user.id;
        this.data = data.filter(item => item.userID === this.id);
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

    assessStepGoal(date) {
       const findDate = this.data.find(item => item.date === date);
        if (findDate.numSteps >= this.user.dailyStepGoal) {
            return true;
        } else {
            return false;
        }
    }

    findStepExcess() {
        return this.data.filter(day => day.numSteps > this.user.dailyStepGoal);
    }

    findStairRecord() {
        const sortedData = this.data.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs);
        return sortedData[0];
    }

    createWeeklyActivityLog(date, property) {
        const index = this.data.findIndex(item => item.date === date);
        const weeklyData = this.data.slice(index, index + 7);
        const weeklyLog = weeklyData.reduce((week, day) => {
            week[day.date] = day[property];
            return week;
          }, {});
        return weeklyLog;
    };
};

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };
