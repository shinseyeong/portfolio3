/*서브 자기계발 분야 추천*/
$(function(){
    $('.areawrap').not(":first").hide();

    $('.area .prev').click(function(e){
        e.preventDefault()
        var current = $('.areawrap:visible');
        var prev = current.prev('.areawrap');

        if(prev.length === 0){
            prev = $('.areawrap:last');
        }

        current.hide();
        prev.show();
    });

    $('.area .next').click(function(e){
        e.preventDefault()
        var current = $('.areawrap:visible');
        var next = current.next('.areawrap');

        if(next.length === 0){
            next = $('.areawrap:first');
        }

        current.hide();
        next.show();
    });
});
