$(function(){
    $('.media-slide').not(":first").hide();

    $('.med-prev').click(function(e){
        e.preventDefault()
        var current = $('.media-slide:visible');
        var prev = current.prev('.media-slide');

        if(prev.length === 0){
            prev = $('.media-slide:last');
        }

        current.hide();
        prev.show();
    });

    $('.med-next').click(function(e){
        e.preventDefault()
        var current = $('.media-slide:visible');
        var next = current.next('.media-slide');

        if(next.length === 0){
            next = $('.media-slide:first');
        }

        current.hide();
        next.show();
    });
});
