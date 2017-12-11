'use strict';

var Home = function() {
    var form = $('.home__form');
    var formTrigger = $('.home__form__trigger');
    var indexSection = $('#contacto');

    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        var formTop = form.get(0).getBoundingClientRect().top;
        var formBottom = indexSection.get(0).getBoundingClientRect().top;

        if ( scroll >= 200 && formBottom >= 600 ) {
            form.addClass('-closed');
        } else {
            form.removeClass('-closed');
        }
    });

    formTrigger.on('click', function(e){
        form.toggleClass('-closed');
        e.preventDefault();
    });
}

module.exports = Home;
