const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log(" hello");
// }

// function sayHello2() {
//   console.log(" hellooo");
// }

// // setInterval(sayHello, 1000);
const date1 = new Date();
console.dir(typeof date1);

console.log(typeof String(date1.getHours()));

function nowTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minute}:${second}`;
}
nowTime();
setInterval(nowTime, 1000);
