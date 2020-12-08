class UserRepository {
    constructor(users) {
      this.userData = users;
    };

    accessUser(idNum) {
      return this.userData.find(user => user.id === idNum)
    };

    findAllUserSteps() {
      return this.userData.reduce((acc, user) => {
        acc += user.dailyStepGoal / this.userData.length;
        return acc;
      }, 0)
    }
};

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
};
