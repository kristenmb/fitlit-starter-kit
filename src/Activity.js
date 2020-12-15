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
};

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };
