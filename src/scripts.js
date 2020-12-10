const allUsers = new UserRepository(userData);
const currentUser = new User(allUsers.accessUser(6));
const greeting = document.querySelector('#greeting');

window.addEventListener('load', displayUserInfo);

function displayUserInfo() {
    displayGreeting();
}

function displayGreeting() {
    greeting.innerText = `Welcome, ${currentUser.accessUserName()}`;
};