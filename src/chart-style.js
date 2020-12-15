const allUsers1 = new UserRepository(userData);
const currentUser1 = new User(allUsers1.accessUser(6));
const hydration1 = new Hydration(currentUser1.id, hydrationData);
const sleep1 = new Sleep(currentUser1.id, sleepData);
const activity1 = new Activity(currentUser1, activityData);
const activityRepo1 = new ActivityRepo(activityData);

const weeklyStepsGraph = document.querySelector('#wkly-step-graph');
const weeklyFlightsGraph = document.querySelector('#wkly-flights-graph');
const weeklyMinsActiveGraph = document.querySelector('#wkly-mins-active-graph');

const stepsChart = new Chart(weeklyStepsGraph, {
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
