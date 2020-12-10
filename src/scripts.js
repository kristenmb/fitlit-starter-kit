const allUsers = new UserRepository(userData);
const currentUser = new User(allUsers.accessUser(6));
const greeting = document.querySelector('#greeting');
const userInfo = document.querySelector('#user-info');

window.addEventListener('load', displayUserProfile);

function displayUserProfile() {
    displayGreeting();
    displayUserInfo();
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