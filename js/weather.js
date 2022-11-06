navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "d33405ca0b4716f39b6b796fce16eba1";

https: function onGeoOk(position) {
  console.log(position);
  let lat = position.coords.latitude;

  let longt = position.coords.longitude;
  console.log(`${lat}  ${longt}`);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${API_KEY}&units=metric`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("div#weather span:first-child");
      const city = document.querySelector("div#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can't find");
}
