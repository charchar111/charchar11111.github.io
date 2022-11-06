const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
const CLASSNAME_HIDDEN = "hidden";

/**please write your name*/
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(CLASSNAME_HIDDEN);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  greeting.innerText = `welcome ${userName} !`;

  paintGreetings(userName);
}

function paintGreetings(userNameValue) {
  greeting.innerText = `welcome ${userNameValue} !`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.classList.add("visi");
}

if (savedUsername == null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
