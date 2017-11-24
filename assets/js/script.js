/*
 * script.js
 * Nate B. Wangsutthitham
 * @natebwangsut | <nate.bwangsut@gmail.com>
 * Created on
 * -
 * Powering JS for natebwangsut.github.io page.
 */

// $(() -> {
//     // jQuery document is ready
//     alert("ready");
// });

$(".navbar a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
        scrollTop: this.offsetTop - 20
    });
});
