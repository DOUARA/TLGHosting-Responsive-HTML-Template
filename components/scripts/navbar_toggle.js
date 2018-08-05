/* Importing jQuery */
$ = require('jquery');

/* Navbar toggle */
$('#toggle').click(function() {
    $(this).next('.nav').toggleClass("is-collapsed-mobile");
});