

const { Weather} = require('./weather.js');
const { UI } = require("./UI");
const { Store } = require("./store");


const store =new Store();
const{city,countryCode} = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

require("./index.css");

async function fetchWeather(){
   const data = await weather.getWeather();
    console.log(data);
   ui.render(data);
   
}
document.getElementById("w-change-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("countryCode").value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    console.log(city, countryCode);


}); 
document.addEventListener("DOMContentLoaded", fetchWeather);

