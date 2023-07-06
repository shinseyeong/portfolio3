/* 베스트 셀러 */

$(function(){

    $('.best-seller-wrap').not(":first").hide();

    $('.bestSellerTabs ul > li').mouseover(function(){
        var index = $(this).index();

        $('.bestSellerTabs ul > li').css('border-bottom','1px solid rgba(27, 27, 27, 0.2)');

        $(this).css('border-bottom','none');

        $('.best-seller-wrap').hide().eq(index).stop().show();
    });

});