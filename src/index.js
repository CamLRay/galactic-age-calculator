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
  if(newUser.lifeExpectancy !== "") {
    galacticAge.lifeLeft();
  }
  $(".output").html(`<p>${newUser.name}'s age is ${galacticAge.earth}<br>Age on Mercury: ${galacticAge.mercury}<br>Age on Venus: ${galacticAge.venus}<br>Age on Mars: ${galacticAge.mars}<br>Age on Jupiter: ${galacticAge.jupiter}<br>Age on Saturn: ${galacticAge.saturn}<br>Age on Uranus: ${galacticAge.uranus}<br>Age on Neptune: ${galacticAge.neptune}</p>`);
});