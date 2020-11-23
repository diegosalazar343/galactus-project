import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalactusCalculator } from './js/user.js'

$(document).ready(function() {
  $('#planets').submit(function(event){
    event.preventDefault();
    const userAge = $('#age').val();
    const userSex = $('#sex').val();
    let userHealth = new GalactusCalculator(userAge, userSex);
  });
});
