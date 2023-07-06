/* 특가인하, 정가인하 */

$(function(){

    $('.bookcorner-section').not(":first").hide();

    $('.bookcorner-tab li').click(function(e){
        e.preventDefault();
        var index = $(this).index();

        $('.bookcorner-tab li').css({'border':'1px solid #000','border-right':'none','border-left':'none','border-top':'none','background-color':'aliceblue'});

        $(this).css({'background-color':'#fff','border':'1px solid #000','border-bottom':'none'});

        $('.bookcorner-tab li a').css('color','#444')

        $(this).children("a").css('color','#e25039');

        $('.bookcorner-section').hide().eq(index).stop().show();
    });

});