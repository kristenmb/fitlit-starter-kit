class SleepRepo {
    constructor(allSleepData) {
        this.data = allSleepData;
    }
}


if (typeof module !== 'undefined') {
    module.exports = SleepRepo;
  };