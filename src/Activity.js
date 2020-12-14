class Activity {
    constructor(idNum, data) {
        this.id = idNum;
        this.data = data;
    }
};

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };
