import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GeolocateService from'./js/geolocate-service.js';
import WeatherService from './js/weather-service.js';

$(document).ready(function() {
  let geoLocation = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      geoLocation = [position.coords.latitude, position.coords.longitude];
      console.log(geoLocation);
      let promise = WeatherService.getWeather(geoLocation[0], geoLocation[1]);
      promise.then(function(response) {
        const body = JSON.parse(response);
        console.log(body);
      })
    });
  } else {
    console.error("something bad happened");
  }
  // let lat = geoLocation[0];
  // let lon = geoLocation[1];
 
  
  // promise.then(function(response) {
  //   const body = JSON.parse(response);
  // })
});


//get geolocate data and display whatever response in the div
//pass long and lat into weatherservice
//logic for clear or not