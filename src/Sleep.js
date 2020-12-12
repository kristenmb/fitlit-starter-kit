class Sleep {
    constructor(idNum, data) {
        this.id = idNum;
        this.data = data.filter(item => item.userID === this.id);
    }
};

if (typeof module !== 'undefined') {
    module.exports = Sleep;
}; 