'use strict';

// Constructor
var Cv = function() {

    var context = $('.cv');

    if (context.length) {
        context.each(function(){
            var $this = $(this);

            $this.on('click', function(){
                if ($this.hasClass('-open')) {
                    $this.removeClass('-open');
                } else {
                    context.removeClass('-open');
                    $this.addClass('-open');
                }
            });
        });
    }
};

module.exports = Cv;
