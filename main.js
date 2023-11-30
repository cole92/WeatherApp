// Accessing Elements
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const highLow = document.querySelector('.hi-low');

// Creating an API
const api = {
    key: "3045dd712ffe6e702e3245525ac7fa38",
    base: "https://api.openweathermap.org/data2.5/"
}

//Accessing the input field
const searchBox = document.querySelector('.search-box');

// Adding an event listener
searchBox.addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        getResults(searchBox.value);
    }
})