const allUsers = new UserRepository(userData);
const currentUser = new User(allUsers.accessUser(getRandomIndex(userData)));
const hydration = new Hydration(currentUser.id, hydrationData);
const sleep = new Sleep(currentUser.id, sleepData);
const activity = new Activity(currentUser, activityData);
const activityRepo = new ActivityRepo(activityData);
const greeting = document.querySelector('#greeting');
const userInfo = document.querySelector('#user-info');
const friendsList = document.querySelector('#friends-list');
const compareStep = document.querySelector('#compare-step');
const dailyWater = document.querySelector('#dly-water');
const dailySleepHrs = document.querySelector('#hrs-slept');
const dailySleepQlty = document.querySelector('#sleep-qlty');
const dailySteps = document.querySelector('#dly-steps');
const dailyFlights = document.querySelector('#flights');
const allTimeSleepAvg = document.querySelector('#all-time-sleep');
const allTimeQltyAvg = document.querySelector('#all-time-quality');
const minutesActive = document.querySelector('#min-active');
const milesWalked = document.querySelector('#miles-walked');
const compareDailySteps = document.querySelector('#compare-avg-steps');
const compareActivityMinutes = document.querySelector('#compare-avg-min');
const compareFlights = document.querySelector('#compare-avg-flights');


window.addEventListener('load', displayUserProfile);

function displayUserProfile() {
  displayGreeting();
  displayUserInfo();
  displayDailyWater();
  displayDailySleepStats();
  displayDailyFlights();
  displayAllTimeSleepInfo();
  displayDailySteps();
  displayActiveMins();
  displayMilesWalked();
  displayCommunityAvg();
  displayFriends();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayGreeting() {
  greeting.innerText = `Welcome, ${currentUser.accessUserName()}`;
};

function displayUserInfo() {
  userInfo.innerHTML = `
        <div class="side">
            <p>${currentUser.address}</p>
            <p>${currentUser.email}</p>
        </div>
        <div class="side">
            <p>STRIDE LENGTH: ${currentUser.strideLength}</p>
            <p>YOUR STEP GOAL: ${currentUser.dailyStepGoal}</p>
        </div>`
};

function displayFriends() {
  friendsList.innerHTML = `
    <li>${userData[currentUser.friends[0] - 1].name}</li>
    <li>${userData[currentUser.friends[1] - 1].name}</li>
    <li>${userData[currentUser.friends[2] - 1].name}</li>`;
}

function displayDailyWater() {
  dailyWater.innerText = `${hydration.findOuncesByDate(hydration.data[hydration.data.length - 1].date)} oz`;
}

function displayDailySleepStats() {
  dailySleepHrs.innerHTML = `
    <div class="stacked">
      <p class="data">${sleep.findByDate((sleep.data[sleep.data.length - 1].date), 'hoursSlept')}</p>
      <p class="tiny">HRS SLEPT</p>
    </div>
    <div class="stacked">
      <p class="data">${sleep.findByDate((sleep.data[sleep.data.length - 1].date), 'sleepQuality')}</p>
      <p class="tiny">SLEEP QUALITY</p>
    </div>`;
}

function displayAllTimeSleepInfo() {
  allTimeSleepAvg.innerHTML = `
    <div class="stacked">
      <p class="data">${sleep.calcUserAvg('hoursSlept')}</p>
      <p class="tiny">HRS SLEPT</p>
    </div>`;
  allTimeQltyAvg.innerHTML = `
      <div class="stacked">
        <p class="data">${sleep.calcUserAvg('sleepQuality')}</p>
        <p class="tiny">SLEEP QUALITY</p>
      </div>`;

}

function displayDailySteps() {
  dailySteps.innerHTML = `
    <div class="stacked">
      <p class="data">${activity.data[activity.data.length - 1].numSteps} <br>
  OF ${currentUser.dailyStepGoal}</p>
      <p class="small">STEPS</p>
    </div>`;
}

function displayDailyFlights() {
  dailyFlights.innerText = `${activity.data[activity.data.length - 1].flightsOfStairs}`
}

function displayActiveMins() {
  minutesActive.innerText = `${activity.data[activity.data.length - 1].minutesActive}`;
}

function displayMilesWalked() {
  milesWalked.innerText = `${activity.findMilesWalked(currentUser, activity.data[activity.data.length - 1].date)}`;
}

function displayCommunityAvg() {
  compareStep.innerText = `${allUsers.findAllUserSteps()}`;
  compareDailySteps.innerText = `${activityRepo.findDailyAvg('numSteps', activityRepo.data[activityRepo.data.length - 1].date)}`;
  compareActivityMinutes.innerText = `${activityRepo.findDailyAvg('minutesActive', activityRepo.data[activityRepo.data.length - 1].date)}`;
  compareFlights.innerText = `${activityRepo.findDailyAvg('flightsOfStairs', activityRepo.data[activityRepo.data.length - 1].date)}`;
}
