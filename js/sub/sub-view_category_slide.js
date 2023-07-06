/*이책을 조회한 회원이 구매한 책 모음*/

$(function(){
    $('.viewcust .view-areawrap').not(":first").hide();

    $('.view-prev').click(function(e){
        e.preventDefault()
        var current = $('.viewcust .view-areawrap:visible');
        var prev = current.prev('.viewcust .view-areawrap view');

        if(prev.length === 0){
            prev = $('.viewcust .view-areawrap:last');
        }

        current.hide();
        prev.show();
    });

    $('.view-next').click(function(e){
        e.preventDefault()
        var current = $('.viewcust .view-areawrap:visible');
        var next = current.next('.viewcust .view-areawrap');

        if(next.length === 0){
            next = $('.viewcust .view-areawrap:first');
        }

        current.hide();
        next.show();
    });
});

/*이책을 구입한 회원이 구매한 책 모음*/
$(function(){
    $('.customer .cust-areawrap').not(":first").hide();

    $('.cust-prev').click(function(e){
        e.preventDefault()
        var current = $('.customer .cust-areawrap:visible');
        var prev = current.prev('.customer .cust-areawrap view');

        if(prev.length === 0){
            prev = $('.customer .cust-areawrap:last');
        }

        current.hide();
        prev.show();
    });

    $('.cust-next').click(function(e){
        e.preventDefault()
        var current = $('.customer .cust-areawrap:visible');
        var next = current.next('.customer .cust-areawrap');

        if(next.length === 0){
            next = $('.customer .cust-areawrap:first');
        }

        current.hide();
        next.show();
    });
});
