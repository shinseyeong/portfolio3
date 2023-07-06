/*메인 슬라이드 옆 상단 작은 슬라이드*/
$(function(){
    
    $('.top-left-small').click(function () {


        $('.top-left-slide').stop().show();
        $('.top-left-btn').click(function(){
            $('.top-left-slide').animate({
                width:"toggle",
                height:"toggle",
                opacity:"0"
            },'slow');
        });
    
    });


});