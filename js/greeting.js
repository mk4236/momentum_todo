const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

let loginForm;
let loginDiv;
let loginInput;
let contentDiv;
let greeting;
let localUsername;

document.addEventListener("DOMContentLoaded", function() {
    //loginForm
    loginForm = document.querySelector("#loginForm");
    loginDiv = loginForm.querySelector("#loginDiv");
    loginInput = loginForm.querySelector("#loginForm input");
    //contents
    contentDiv = document.querySelector("#contentDiv");
    greeting = contentDiv.querySelector("#greeting");
    //localStorage
    localUsername = localStorage.getItem(USERNAME_KEY);

    // login Event
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.addEventListener("reset", printLoginForm);

    if (localUsername === null) {
        printLoginForm();
    } else {
        printContent();
    }
});

function onLoginSubmit(e) {
    e.preventDefault();
    const checkRes = checkLoginInput();

    if (checkRes) {
        setLocalstorage();
        printContent();
    }
}

// contents 보이기
function printContent() {
    contentDiv.classList.remove(HIDDEN_CLASS);
    loginDiv.classList.add(HIDDEN_CLASS);
    setGreeting();
}

function setGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
}

//login form 보이기
function printLoginForm() {
    contentDiv.classList.add(HIDDEN_CLASS);
    loginDiv.classList.remove(HIDDEN_CLASS);

    resetLocalstorage();
    resetGreeting();
}

function resetLocalstorage() {
    localStorage.removeItem(USERNAME_KEY);
}

function setLocalstorage() {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
}

function resetGreeting() {
    greeting.innerText = "";
}

function checkLoginInput() {
    let res = true;

    if (!loginInput.value.trim()) {
        alert("아이디를 입력해주세요");
        res = false;
    }

    return res;
}

