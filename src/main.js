import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import { GalactusCalculator } from './galactus.js';

$(document).ready(function() {
  $('#planets').submit(function(event) {
    event.preventDefault();
    const year = $('#year').val();
    const mercuryAge = $('#mercuryAge').val();
    const venusAge = $('#venusAge').val();
    const marchAge = $('#marchAge').val();
    const jupitarAge = $('#jupitarAge').val();
    const mercuryLeft = $('#mercuryLeft').val();
    const venusLeft = $('#venusLeft').val();
    const marchLeft = $('#marchLeft').val();
    const jupitarLeft = $('#jupitarLeft').val();
    const mercuryPassed = $('#mercuryPassed').val();
    const VenusPassed = $('#VenusPassed').val();
    const marsPassed = $('#marsPassed').val();
    const jupitarPassed = $('#jupitarPassed').val();
    let
    $(".usersAge") (`Your age is (${year})`);
  });
});
