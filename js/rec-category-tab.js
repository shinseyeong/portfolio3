/* 분야별추천 */

$(function(){

    $('.lecture').not(":first").hide();

    $('.tabwrap > li').mouseover(function(){
        var index = $(this).index();

        $('.tabwrap > li').css({'border-bottom':'none',
        'color':'#000'});

        $(this).css({ "border-bottom":"2px solid #e66a57",
        "color":"#e66a57"
        });

        $('.lecture').hide().eq(index).stop().show();
    });

});