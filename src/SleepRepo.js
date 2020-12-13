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
        const userIDs = this.data.map(user => user.userID);
        const numUsers = Math.max.apply(Math, userIDs);
        const index = this.data.findIndex(item => item.date === date);
        const weeklySleepData = this.data.slice(index, index + (7 * numUsers));
        const userQualityAvg = weeklySleepData.reduce((acc, element) => {
            if (!acc[element.userID]) {
                acc[element.userID] = element.sleepQuality / 7;
            } else {
                acc[element.userID] += element.sleepQuality / 7;
            }
            return acc;
        }, {});
        const keys = Object.keys(userQualityAvg);
        const highQualitySleep = keys.filter(key => userQualityAvg[key] > 3);
        return highQualitySleep;
    };

    findWellRestedUsers(date) {
        const userIDs = this.data.map(user => user.userID);
        const numUsers = Math.max.apply(Math, userIDs);
        const index = this.data.findIndex(item => item.date === date);
        const givenDayData = this.data.slice(index, index + numUsers)
        .sort((a, b) => (b.hoursSlept - a.hoursSlept));
        const longestSleep = givenDayData[0].hoursSlept;
        return givenDayData.filter(element => element.hoursSlept === longestSleep);
    }
};

if (typeof module !== 'undefined') {
    module.exports = SleepRepo;
  };