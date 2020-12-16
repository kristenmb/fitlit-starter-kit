const weeklyStepsGraph = document.querySelector('#wkly-step-graph');
const weeklyFlightsGraph = document.querySelector('#wkly-flights-graph');
const weeklyMinsActiveGraph = document.querySelector('#wkly-mins-active-graph');
const weeklyWaterGraph = document.querySelector('#wkly-water-graph');
const weeklyHrsSleptGraph = document.querySelector('#wkly-hrs-graph');
const weeklyQltyGraph = document.querySelector('#wkly-qlty-graph');

const stepsChart = new Chart(weeklyStepsGraph, {
    type: 'line',
    data: {
    labels: Object.keys(activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, 'numSteps')),
    datasets: [{
        label: 'Weekly Step',
        borderColor: 'rgb(1, 255, 0)',
        data: Object.values(activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, 'numSteps'))
      }]
    },
  options: {
    legend: {
      display: false
    },
  }
});

const flightsChart = new Chart(weeklyFlightsGraph, {
    type: 'line',
    data: {
    labels: Object.keys(activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, 'flightsOfStairs')),
    datasets: [{
        label: 'Weekly Flights',
        borderColor: 'rgb(1, 255, 0)',
        data: Object.values(activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, 'flightsOfStairs'))
      }]
    },
  options: {
    legend: {
      display: false
    },
  }
});

const activeChart = new Chart(weeklyMinsActiveGraph, {
    type: 'line',
    data: {
    labels: Object.keys(activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, 'minutesActive')),
    datasets: [{
        label: 'Weekly Minutes Active',
        borderColor: 'rgb(255, 245, 0)',
        data: Object.values(activity.createWeeklyActivityLog(activity.data[activity.data.length - 7].date, 'minutesActive'))
      }]
    },
  options: {
    legend: {
      display: false
    },
  }
});

const waterChart = new Chart(weeklyWaterGraph, {
    type: 'line',
    data: {
    labels: Object.keys(hydration.createWeeklyHydrationLog(hydration.data[hydration.data.length - 7].date)),
    datasets: [{
        label: 'Weekly Water',
        borderColor: 'rgb(0, 236, 255)',
        data: Object.values(hydration.createWeeklyHydrationLog(hydration.data[hydration.data.length - 7].date))
      }]
    },
  options: {
    legend: {
      display: false
    },
  }
});

const sleepHrsChart = new Chart(weeklyHrsSleptGraph, {
    type: 'line',
    data: {
    labels: Object.keys(sleep.createWeeklySleepLog(sleep.data[sleep.data.length - 7].date, 'hoursSlept')),
    datasets: [{
        label: 'Weekly Hours',
        borderColor: 'rgb(200, 90, 253)',
        data: Object.values(sleep.createWeeklySleepLog(sleep.data[sleep.data.length - 7].date, 'hoursSlept'))
      }]
    },
  options: {
    legend: {
      display: false
    },
  }
});

const qualityChart = new Chart(weeklyQltyGraph, {
    type: 'line',
    data: {
    labels: Object.keys(sleep.createWeeklySleepLog(sleep.data[sleep.data.length - 7].date, 'sleepQuality')),
    datasets: [{
        label: 'Weekly Hours',
        borderColor: 'rgb(200, 90, 253)',
        data: Object.values(sleep.createWeeklySleepLog(sleep.data[sleep.data.length - 7].date, 'sleepQuality'))
      }]
    },
  options: {
    legend: {
      display: false
    },
  }
});
