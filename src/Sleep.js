if (typeof require !== 'undefined') {  
    var moment = require('../src/Moment'); 
}

class Sleep {
    constructor(idNum, data) {
        this.id = idNum;
        this.data = data.filter(item => item.userID === this.id);
    }

    calcUserAvg(property) {
        const totalHours = this.data.reduce((hours, day) => {
            hours += day[property];
            return hours;
          }, 0);
          const avgHours = (totalHours / this.data.length);
          return avgHours.toFixed(1);
        };
        
    findByDate(date, property) {
        const dateData = this.data.find(item => item.date === date);
        return dateData[property];
    };

    createWeeklySleepLog(date, property) {
        const index = this.data.findIndex(item => item.date === date);
        const weeklyData = this.data.slice(index, index + 7);
        const weeklySleepLog = weeklyData.reduce((week, day) => {
            let newDate = moment(day.date).format('ll');
            week[newDate] = day[property];
            return week;
          }, {});
        return weeklySleepLog;
    };
};

if (typeof module !== 'undefined') {
    module.exports = Sleep;
}; 