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
  console.dir(localStorage.getItem(USERNAME_KEY));
  console.dir(savedUsername);
  paintGreetings(userName);
}

function paintGreetings(userNameValue) {
  greeting.innerText = `welcome ${userNameValue} !`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

if (savedUsername == null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

//고치기 전

//   loginForm.classList.remove(CLASSNAME_HIDDEN);

//   /**please write your name*/
//   function onLoginSubmit(event) {
//     event.preventDefault();
//     const userName = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, userName);
//     loginForm.classList.add(CLASSNAME_HIDDEN);
//     greeting.classList.remove(CLASSNAME_HIDDEN);
//     greeting.innerText = `Hello ${userName}`;
//     loginForm.addEventListener("submit", onLoginSubmit);
//   }
//   if (savedUsername == null) {  }

// } else {
//   greeting.innerText = `welcome ${savedUsername} !`;
//   greeting.classList.remove(CLASSNAME_HIDDEN);
// }
