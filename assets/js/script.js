

$(".navbar a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
        scrollTop: this.offsetTop - 20
    });
});

function loadBG() {
    document.getElementsByClassName('landing_bg')[0].style.background="url('../img/background.png')"
}

window.onload=loadBG();