/*모든 카테고리 창 닫기 열기 하면서 그림바꾸기*/
$(function () {

    $(".allview > a:first-child").mouseover(function () {
        $(".all").attr("src", "img/allview2.png")
    }).mouseout(function () {

        $('.all').attr("src", "img/allview1.png");

    });



    $('.allview > a').click(function () {


        $('.all-category-wrap ').stop().slideToggle();

    });

    $(".allview").click(function () {
        $(".arrow").attr("src", "img/arrow3.png")
    })


    $(".allview").mouseover(function () {
        $(".arrow").attr("src", "img/arrow2.png")
    }).mouseout(function () {

        $('.arrow').attr("src", "img/arrow1.png");

    });


    $(".close").click(function () {
        $('.all-category-wrap ').hide(1000);
    })



});
