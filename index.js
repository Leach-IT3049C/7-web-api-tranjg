const notificationElement = document.querySelector(`.notification`);
const iconElement = document.querySelector(`.weather-icon`);
const tempElement = document.querySelector(`.temperature-value  p`);
const descElement = document.querySelector(`.temperature-description p`);
const locationElement = document.querySelector(`.location p`);

const weather = {};

weather.temperature = {
    unit : `fahrenheit`
}

const KELVIN = 273;

//api key
const key = `e3eeba4b19afc269da61cbeca2c04699`;

//check for browser support of geolocation
if(`geolocation` in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display=`block`;
    notificationElement.innerHTML = `<p>Brwoser doesn't support Geolocation</p>`;
}

//set user's position
function setPostion(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

