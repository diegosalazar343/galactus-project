import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import { GalactusCalculator } from './galactus.js';

$(document).ready(function() {
  $('#planets').submit(function(event) {
    event.preventDefault();
    const  = $('#').val();
    const = $('#').val();
    let  = new GalactusCalculator(, );
  });
});
