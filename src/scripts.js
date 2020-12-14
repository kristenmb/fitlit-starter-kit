const allUsers = new UserRepository(userData);
const currentUser = new User(allUsers.accessUser(6));
const hydration = new Hydration(currentUser.id, hydrationData);
const sleep = new Sleep(currentUser.id, sleepData);
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

window.addEventListener('load', displayUserProfile);

function displayUserProfile() {
    displayGreeting();
    displayUserInfo();
    compareUserSteps();
    displayDailyWater();
    displayWeeklyWater();
    displayDailyHoursSlept();
    displayDailySleepQuality();
    displayWeeklySleepLog('hoursSlept');
    displayWeeklySleepLog('sleepQuality');
    displayAllTimeSleepInfo();
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

function compareUserSteps() {
    compareStep.innerHTML = `
    <p>${currentUser.dailyStepGoal}</p>
    <p>YOUR STEP GOAL</p>
    <p>${allUsers.findAllUserSteps()}</p>
    <p>AVERAGE COMMUNITY STEP GOAL</p>`
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
