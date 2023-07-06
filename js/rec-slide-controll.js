/*인터파크 추천항목부분*/ 
function slide() {

    $('.rec-slidewrap').stop().animate({ marginLeft: -480 }, 1000, function () {

      $('.rec-slidewrap-left:first').appendTo('.rec-slidewrap');

      $('.rec-slidewrap').css({ marginLeft: 0 });

    });

  }



  setInterval(slide, 3000);

$(function(){
  $('.rec-prev').click(function(){

    $('.rec-slidewrap').stop().animate({marginLeft: -480 }, 1000, function(){

      $('.rec-slidewrap-left:first').appendTo('.rec-slidewrap');
 
      $('.rec-slidewrap').css({marginLeft:0});
 
   });
 });



 $('.rec-next').click(function(){

  $('.rec-slidewrap-left:last').prependTo('.rec-slidewrap');

  $('.rec-slidewrap').css('margin-left',-480);    // $('.slide').css({marginLeft:-1000}); 

  $('.rec-slidewrap').stop().animate({marginLeft:0},1000);

 });

});