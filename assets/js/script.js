$(".navbar a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
        scrollTop: this.offsetTop - 20
    });
});