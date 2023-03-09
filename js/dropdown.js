$(document).ready(function(e) {
    $('#main-txt > li').mouseover(function(e) {
        $(this).find('.sub-txt').stop().slideDown();
    });
    $('#main-txt > li').mouseout(function(e) {
        $(this).find('.sub-txt').stop().slideUp();
    });
});