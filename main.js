// Accessing Elements
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const highLow = document.querySelector('.hi-low');

// Creating an API
const api = {
    key: "3045dd712ffe6e702e3245525ac7fa38",
    base: "https://api.openweathermap.org/data/2.5/"
}

//Accessing the input field
const searchBox = document.querySelector('.search-box');

// Adding an event listener
searchBox.addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        getResults(searchBox.value);
    }
})

const getResults = query => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json())
    .then(displayResults);
    console.log(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
}

const displayResults = weather => {
    city.innerText = `${weather.name}, ${weather.sys.contry}`;
    let now = new Date();
    date.innerText = dateBuilder(now);
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    weather.innerText = weather.weather[0].main;
    highLow.innerText = `${Math.round(weather.main.temp.temp_min)}°c / ${Math.round(weather.main.temp.temp_max)}°c`;
}