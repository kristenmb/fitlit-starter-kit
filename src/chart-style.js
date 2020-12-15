const allUsers1 = new UserRepository(userData);
const currentUser1 = new User(allUsers1.accessUser(6));
const hydration1 = new Hydration(currentUser1.id, hydrationData);
const sleep1 = new Sleep(currentUser1.id, sleepData);
const activity1 = new Activity(currentUser1, activityData);
const activityRepo1 = new ActivityRepo(activityData);

const weeklyStepsGraph = document.querySelector('#wkly-step-graph');
const weeklyFlightsGraph = document.querySelector('#wkly-flights-graph');
const weeklyMinsActiveGraph = document.querySelector('#wkly-mins-active-graph');
const weeklyWaterGraph = document.querySelector('#wkly-water-graph');
const weeklyHrsSleptGraph = document.querySelector('#wkly-hrs-graph');
const weeklyQltyGraph = document.querySelector('#wkly-qlty-graph');

const stepsChart = new Chart(weeklyStepsGraph, {
    axisX: {
      valueFormatString: 'DD-MMM'
    },
    type: 'line',
    data: {
    labels: Object.keys(activity1.createWeeklyActivityLog(activity1.data[activity1.data.length - 7].date, 'numSteps')),
    datasets: [{
        label: 'Weekly Step',
        borderColor: 'rgb(1, 255, 0)',
        data: Object.values(activity1.createWeeklyActivityLog(activity1.data[activity1.data.length - 7].date, 'numSteps'))
      }]
    },
  options: {
    // scales: {
    //   xAxes: [{
    //     type: 'time',
    //     time: {
    //       displayFormats: {
    //         quarter: 'll'
    //       }
    //     }
    //   }]
    // }
  }
});

const flightsChart = new Chart(weeklyFlightsGraph, {
    type: 'line',
    data: {
    labels: Object.keys(activity1.createWeeklyActivityLog(activity1.data[activity1.data.length - 7].date, 'flightsOfStairs')),
    datasets: [{
        label: 'Weekly Flights',
        borderColor: 'rgb(1, 255, 0)',
        data: Object.values(activity1.createWeeklyActivityLog(activity1.data[activity1.data.length - 7].date, 'flightsOfStairs'))
      }]
    },
  options: {}
});

const activeChart = new Chart(weeklyMinsActiveGraph, {
    type: 'line',
    data: {
    labels: Object.keys(activity1.createWeeklyActivityLog(activity1.data[activity1.data.length - 7].date, 'minutesActive')),
    datasets: [{
        label: 'Weekly Minutes Active',
        borderColor: 'rgb(255, 245, 0)',
        data: Object.values(activity1.createWeeklyActivityLog(activity1.data[activity1.data.length - 7].date, 'minutesActive'))
      }]
    },
  options: {}
});

const waterChart = new Chart(weeklyWaterGraph, {
    type: 'line',
    data: {
    labels: Object.keys(hydration1.createWeeklyHydrationLog(hydration1.data[hydration1.data.length - 7].date)),
    datasets: [{
        label: 'Weekly Water',
        borderColor: 'rgb(0, 236, 255)',
        data: Object.values(hydration1.createWeeklyHydrationLog(hydration1.data[hydration1.data.length - 7].date))
      }]
    },
  options: {}
});

const sleepHrsChart = new Chart(weeklyHrsSleptGraph, {
    type: 'line',
    data: {
    labels: Object.keys(sleep1.createWeeklySleepLog(sleep1.data[sleep1.data.length - 7].date, 'hoursSlept')),
    datasets: [{
        label: 'Weekly Hours',
        borderColor: 'rgb(200, 90, 253)',
        data: Object.values(sleep1.createWeeklySleepLog(sleep1.data[sleep1.data.length - 7].date, 'hoursSlept'))
      }]
    },
  options: {}
});

const qualityChart = new Chart(weeklyQltyGraph, {
    type: 'line',
    data: {
    labels: Object.keys(sleep1.createWeeklySleepLog(sleep1.data[sleep1.data.length - 7].date, 'sleepQuality')),
    datasets: [{
        label: 'Weekly Hours',
        borderColor: 'rgb(200, 90, 253)',
        data: Object.values(sleep1.createWeeklySleepLog(sleep1.data[sleep1.data.length - 7].date, 'sleepQuality'))
      }]
    },
  options: {}
});
