const allUsers = new UserRepository(userData);
const currentUser = new User(allUsers.accessUser(6));
const greeting = document.querySelector('#greeting');
const userInfo = document.querySelector('#user-info');
const compareStep = document.querySelector('#compare-step');

window.addEventListener('load', displayUserProfile);

function displayUserProfile() {
    displayGreeting();
    displayUserInfo();
    compareUserSteps();
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