/*메인 슬라이드 움직이는 부분*/
$(function(){
    $('.slidewrap').not(":first").hide();

    $('.prev').click(function(){
        var current = $('.slidewrap:visible');
        var prev = current.prev('.slidewrap');

        if(prev.length === 0){
            prev = $('.slidewrap:last');
        }

        var index = prev.index();

        $('.slide-Tab li').css({'border-top':'none'});

        $('.slide-Tab li').eq(index).css({'border-top':'3px solid #da3445'});

        current.hide();
        prev.show();
    });

    $('.next').click(function(){

        var current = $('.slidewrap:visible');
        var next = current.next('.slidewrap');

        if(next.length === 0){
            next = $('.slidewrap:first');
        }

        var index = next.index();

        $('.slide-Tab li').css({'border-top':'none'});

        $('.slide-Tab li').eq(index).css({'border-top':'3px solid #da3445'});

        current.hide();
        next.show();
    });
});
