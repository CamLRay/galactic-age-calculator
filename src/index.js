import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge, User } from "../src/js/galactic-age";

$("#user").on("submit", (e) => {
  e.preventDefault();
  let newUser = new User ($("#user-name").val(), $("#birthdate").val(), Date(), $("#life-expectancy").val());
  // $(".output").html(`<p>${newUser.name}'s age is ${newUser.findAge()}</p>`);
  $(".output").html(`<p>Birthdate: ${newUser.birthdate}  ${newUser.todaysDate}</p>`);
});