$(document).ready(function(){
  $('.btnMenu').on("click", function(){
    $(this).fadeOut();
    $('nav').addClass('on');
    $('section').addClass('on');
  });

  $('nav li').on("click", function(){
    $('.btnMenu').fadeIn();
    $('nav').removeClass('on');
    $('section').removeClass('on');

    var index = $(this).index();
    $('section > div').removeClass('on');
    $('section > div').eq(index).addClass('on');
  });
});
