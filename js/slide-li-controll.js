/* 메인슬라이드 탭, 배경색부분*/
$(function(){

    $('.slidewrap').not(":first").hide();

    $('.slide-Tab li').click(function(){
       
        var index = $(this).index();

        $('.slide-Tab li').css({'border-top':'none'});

        $(this).css({'border-top':'3px solid #da3445'});

        $('.slide-Tab li').css('color','#444')

        $('.slidewrap').hide().eq(index).stop().show();
    });

    $('.slidewrap').eq(0).css('background-color','#e7d6ce');

});