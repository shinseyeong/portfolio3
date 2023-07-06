/* 출판사서평 펼쳐보기 */

$(function () {
    $(".detailtitle .txt_spread").eq(0).click(function (e) {
        e.preventDefault();
       $(".detailtitle").eq(1).height("378px");
       $(".detailtitle .txt_spread").eq(0).hide();
       $(".detailtitle .txt_close").eq(0).show();
    });
 });
 

/* 출판사서평 접어보기 */

$(function () {
    $("detailtitle .txt_close").eq(0).click(function (e) {
        e.preventDefault();
       $(".detailtitle").eq(1).height("190px");
       $(".detailtitle .txt_close").eq(0).hide();
       $(".detailtitle .txt_spread").eq(0).show();
    });
 });


 /*목차*/
 $(function () {
    $(".detailtitle .txt_spread").eq(1).click(function (e) {
        e.preventDefault();
       $(".detailtitle").eq(2).height("1491px");
       $(".detailtitle .txt_spread").eq(1).hide();
       $(".detailtitle .txt_close").eq(1).show();
    });
 });
 


$(function () {
    $(".detailtitle .txt_close").eq(1).click(function (e) {
        e.preventDefault();
       $(".detailtitle").eq(2).height("190px");
       $(".detailtitle .txt_close").eq(1).hide();
       $(".detailtitle .txt_spread").eq(1).show();
    });
 });

  /*본문중에서*/
  $(function () {
    $(".detailtitle .txt_spread").eq(2).click(function (e) {
        e.preventDefault();
       $(".detailtitle").eq(3).height("378px");
       $(".detailtitle .txt_spread").eq(2).hide();
       $(".detailtitle .txt_close").eq(2).show();
    });
 });
 


$(function () {
    $(".detailtitle .txt_close").eq(2).click(function (e) {
        e.preventDefault();
       $(".detailtitle").eq(3).height("190px");
       $(".detailtitle .txt_close").eq(2).hide();
       $(".detailtitle .txt_spread").eq(2).show();
    });
 });

 

 
