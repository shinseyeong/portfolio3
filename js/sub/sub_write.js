/*작가 생일*/
$(function () {
    $(".write_right .txt_spread").eq(0).click(function (e) {
        e.preventDefault();
       $(".writeinfo").eq(0).height("262px");
       $(".writeinfo-bottom ").eq(0).height("222px");
       $(".write_right").eq(0).height("220px");
       $(".write_right > p").eq(0).height("175px");
       $(".write_right > .txt_spread").eq(0).hide();
       $(".write_right > .txt_close").eq(0).show();
    });
 });
 
 
 
 $(function () {
    $(".write_right .txt_close").eq(0).click(function (e) {
        e.preventDefault();
       $(".writeinfo").eq(0).height("194px");
       $(".writeinfo-bottom").eq(0).height("154px");
       $(".write_right").eq(0).height("152px");
       $(".write_right > p").eq(0).height("97px");
       $(".write_right > .txt_close").eq(0).hide();
       $(".write_right > .txt_spread").eq(0).show();
    });
 });
 