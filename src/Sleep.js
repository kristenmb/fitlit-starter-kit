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
    };

if (typeof module !== 'undefined') {
    module.exports = Sleep;
}; 