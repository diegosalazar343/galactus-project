import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalactusCalculator } from "./GalactusCalculator";

$(document).ready(function() {
  $('#planets').submit(function(event) {
    event.preventDefault();
    const age = $('#year').val();
    $('.userAge').append(`your age is (${age})`);
  });
});
