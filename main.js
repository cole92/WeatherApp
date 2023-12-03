// Accessing Elements
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temp');
const weatherEl = document.querySelector('.weather');
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
    if (event.key == 'Enter' && searchBox.value.trim() !== '') {
        getResults(searchBox.value);
    } else if (event.key == 'Enter') {
        alert('Please enter the city name.')
    }
})

// Adding get results functions (fetch,then,then)
const getResults = query => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json())
    .then(displayResults)
    .catch(err => {
        console.error(err);
        alert('An error occurred while fetching data.')
    })
    console.log(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
}

// Display results function
const displayResults = weather => {
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    date.innerText = dateBuilder(now);
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    weatherEl.innerText = weather.weather[0].main;
    highLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

// Adding dateBuilder function
const dateBuilder = d => {
    let months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}