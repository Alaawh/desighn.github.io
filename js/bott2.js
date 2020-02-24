/* global $, document, window, AOS */
window.onload = function () {
    
    'use strict';
    
    $('.loading2').css('display', 'none');
    
};
$(document).scroll(function () {
    
    'use strict';
    
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
    
});

AOS.init();