import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge, User } from "../src/js/galactic-age";

$("#user").on("submit", (e) => {
  e.preventDefault();
  let today = new Date();
  let newUser = new User ($("#user-name").val(), $("#birthdate").val(), `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`, $("#life-expectancy").val());
  let galacticAge = new GalacticAge();
  galacticAge.currentAge(newUser.findAge());
  if(Number(newUser.lifeExpectancy) && Number(newUser.age)) {
    galacticAge.lifeLeft(newUser.lifeExpectancy);
    if(galacticAge.expectancyBeat === false){
      $(".output-expectancy").html(`<p>${newUser.name} you have ${galacticAge.earthLeft} years left to live on Earth <br>Left on Mercury: ${galacticAge.mercuryLeft}<br>Left on Venus: ${galacticAge.venusLeft}<br>Left on Mars: ${galacticAge.marsLeft}<br>Left on Jupiter: ${galacticAge.jupiterLeft}<br>Left on Saturn: ${galacticAge.saturnLeft}<br>Left on Uranus: ${galacticAge.uranusLeft}<br>Left on Neptune: ${galacticAge.neptuneLeft}</p>`);
    } else if(galacticAge.expectancyBeat === true){
      $(".output-expectancy").html(`<p>${newUser.name} you have lived ${galacticAge.earthLeft} years over your expectancy on Earth <br>Over on Mercury: ${galacticAge.mercuryLeft}<br>Over on Venus: ${galacticAge.venusLeft}<br>Over on Mars: ${galacticAge.marsLeft}<br>Over on Jupiter: ${galacticAge.jupiterLeft}<br>Over on Saturn: ${galacticAge.saturnLeft}<br>Over on Uranus: ${galacticAge.uranusLeft}<br>Over on Neptune: ${galacticAge.neptuneLeft}</p>`);
    } else {
      $(".output-expectancy").html("");
    }
  } else {
    $(".output-expectancy").html("");
  }
  if(newUser.name ==="" || newUser.birthdate ===""){
    $(".output").html("<h3>Please enter your name and birthdate</h3>");
  } else {
    $(".output").html(`<p>${newUser.name}'s age is ${galacticAge.earth}<br>Age on Mercury: ${galacticAge.mercury}<br>Age on Venus: ${galacticAge.venus}<br>Age on Mars: ${galacticAge.mars}<br>Age on Jupiter: ${galacticAge.jupiter}<br>Age on Saturn: ${galacticAge.saturn}<br>Age on Uranus: ${galacticAge.uranus}<br>Age on Neptune: ${galacticAge.neptune}</p>`);
  }
});