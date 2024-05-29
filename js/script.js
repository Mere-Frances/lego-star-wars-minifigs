/*jshint esversion: 6*/
alert('working');
// mapbox token
// mapboxgl.accessToken = "mapbox access token link here";

// initialise jquery
$(document).ready(function() {
    // jquery functions here
    // jquery datepicker
    $("#datepicker").datepicker();
});

// initialise swiper js
const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// mapbox initialisation
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/navigation-night-v1",
    center: [175.02916041281915, -40.85519253100478], // starting position, use custom coordinates
    zoom: 17,
});