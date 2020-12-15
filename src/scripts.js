const allUsers = new UserRepository(userData);
const currentUser = new User(allUsers.accessUser(6));
const hydration = new Hydration(currentUser.id, hydrationData);
const sleep = new Sleep(currentUser.id, sleepData);
const activity = new Activity(currentUser, activityData);
const activityRepo = new ActivityRepo(activityData);
const greeting = document.querySelector('#greeting');
const userInfo = document.querySelector('#user-info');
const compareStep = document.querySelector('#compare-step');
const dailyWater = document.querySelector('#dly-water');
const weeklyWater = document.querySelector('#weekly-water');
const dailySleepHrs = document.querySelector('#hrs-slept');
const dailySleepQlty = document.querySelector('#sleep-qlty');
const weeklySleepLog = document.querySelector('#wkly-sleep');
const weeklySleepQlty = document.querySelector('#wkly-qlty');
const allTimeSleepAvg = document.querySelector('#all-time-sleep');
const allTimeQltyAvg = document.querySelector('#all-time-quality');
const dailySteps = document.querySelector('#dly-steps');
const minutesActive = document.querySelector('#min-active');
const milesWalked = document.querySelector('#miles-walked');
const compareDailySteps = document.querySelector('#compare-avg-steps');
const compareActivityMinutes = document.querySelector('#compare-avg-min');
const compareFlights = document.querySelector('#compare-avg-flights');
const weeklySteps = document.querySelector('#wkly-steps');
const weeklyFlights = document.querySelector('#wkly-flights');
const weeklyMinActive = document.querySelector('#wkly-min-active')

window.addEventListener('load', displayUserProfile);

function displayUserProfile() {
  displayGreeting();
  displayUserInfo();
  displayDailyWater();
  displayWeeklyWater();
  displayDailyHoursSlept();
  displayDailySleepQuality();
  displayWeeklySleepLog('hoursSlept');
  displayWeeklySleepLog('sleepQuality');
  displayAllTimeSleepInfo();
  displayDailySteps();
  displayActiveMins();
  displayMilesWalked();
  displayCommunityAvg();
  displayWeeklyStepLog('numSteps');
  displayWeeklyStepLog('flightsOfStairs');
  displayWeeklyStepLog('minutesActive');
};

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
            <p>Stride Length: ${currentUser.strideLength}</p>
            <p>Your Step Goal: ${currentUser.dailyStepGoal} steps</p>
        </div>`
};

function displayDailyWater() {
  dailyWater.innerText = `${hydration.findOuncesByDate(hydration.data[hydration.data.length - 1].date)} OZ`;
}

function displayWeeklyWater() {
  const weeklyWaterLog = hydration.createWeeklyHydrationLog(hydration.data[hydration.data.length - 7].date)
  const dates = Object.keys(weeklyWaterLog);
  const ounces = Object.values(weeklyWaterLog);
  const waterList = dates.map((each, i) => each + ': ' + ounces[i]);
  weeklyWater.innerHTML = `
    <p>${waterList[0]} <br> ${waterList[1]} <br> ${waterList[2]} <br> ${waterList[3]}  <br> ${waterList[4]}
    <br> ${waterList[5]}  <br> ${waterList[6]}</p>`;
}

function displayDailyHoursSlept() {
  dailySleepHrs.innerText = `${sleep.findByDate((sleep.data[sleep.data.length - 1].date), 'hoursSlept')}`
}

function displayDailySleepQuality() {
  dailySleepQlty.innerText = `${sleep.findByDate((sleep.data[sleep.data.length - 1].date), 'sleepQuality')}`
}

function displayWeeklySleepLog(property) {
  const weeklySleep = sleep.createWeeklySleepLog(sleep.data[sleep.data.length - 7].date, property);
  const dates = Object.keys(weeklySleep);
  const values = Object.values(weeklySleep);
  const sleepList = dates.map((each, i) => each + ': ' + values[i]);
  if (property === 'hoursSlept') {
    weeklySleepLog.innerHTML = `
      <p>WEEKLY HRS SLEPT</p>
      <p>${sleepList[0]} <br> ${sleepList[1]} <br> ${sleepList[2]} <br> ${sleepList[3]}  <br> ${sleepList[4]}
      <br> ${sleepList[5]}  <br> ${sleepList[6]}</p>`;
  } else {
    weeklySleepQlty.innerHTML = `
      <p>WEEKLY SLEEP QUALITY</p>
      <p>${sleepList[0]} <br> ${sleepList[1]} <br> ${sleepList[2]} <br> ${sleepList[3]}  <br> ${sleepList[4]}
      <br> ${sleepList[5]}  <br> ${sleepList[6]}</p>`;
  }
}

function displayAllTimeSleepInfo() {
  allTimeSleepAvg.innerText = `${sleep.calcUserAvg('hoursSlept')}`;
  allTimeQltyAvg.innerText = `${sleep.calcUserAvg('sleepQuality')}`;
}

function displayDailySteps() {
  dailySteps.innerText = `${activity.data[activity.data.length - 1].numSteps}
  OF ${currentUser.dailyStepGoal}`;
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

function displayWeeklyStepLog(property) {
  const weeklyActive = activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, property);
  const dates = Object.keys(weeklyActive);
  const values = Object.values(weeklyActive);
  const activityList = dates.map((each, i) => each + ': ' + values[i]);
  if (property === 'numSteps') {
    weeklySteps.innerHTML = `
      <p>WEEKLY STEPS</p>
      <p>${activityList[0]} <br> ${activityList[1]} <br> ${activityList[2]} <br> ${activityList[3]}  <br> ${activityList[4]}
      <br> ${activityList[5]}  <br> ${activityList[6]}</p>`;
  } else if (property === 'flightsOfStairs') {
    weeklyFlights.innerHTML = `
      <p>WEEKLY FLIGHTS OF STAIRS</p>
      <p>${activityList[0]} <br> ${activityList[1]} <br> ${activityList[2]} <br> ${activityList[3]}  <br> ${activityList[4]}
      <br> ${activityList[5]}  <br> ${activityList[6]}</p>`;
  } else {
    weeklyMinActive.innerHTML = `
      <p>WEEKLY FLIGHTS OF STAIRS</p>
      <p>${activityList[0]} <br> ${activityList[1]} <br> ${activityList[2]} <br> ${activityList[3]}  <br> ${activityList[4]}
      <br> ${activityList[5]}  <br> ${activityList[6]}</p>`;
  }
}
