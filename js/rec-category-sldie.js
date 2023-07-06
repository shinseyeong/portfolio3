/*분야별추천 넘어가는 부분*/ 

$(function(){
    $('.lecture').not(":first").hide();

    $('.rec-category-prev').click(function(e){
        e.preventDefault();
        var current = $('.lecture:visible');
        var prev = current.prev('.lecture');

        if(prev.length === 0){
            prev = $('.lecture:last');
        }

        var index = prev.index();

        $('.tabwrap > li').css({'border-bottom':'none'});

        $('.tabwrap > li').eq(index).css({'border-bottom':'2px solid #e66a57'});

        current.hide();
        prev.show();
    });

    $('.rec-category-next').click(function(e){
        e.preventDefault();
        var current = $('.lecture:visible');
        var next = current.next('.lecture');

        if(next.length === 0){
            next = $('.lecture:first');
        }

        var index = next.index();

        $('.tabwrap > li').css({'border-bottom':'none'});

        $('.tabwrap > li').eq(index).css({'color':'#e66a57','border-bottom':'2px solid #e66a57'});

        current.hide();
        next.show();
    });
});
