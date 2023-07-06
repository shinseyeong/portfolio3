/* 책소개 텍스트 가져오기 */
	
$(function(){
    $.get("./sub_txt/sub_reccomend.txt", function(data) {
        $(".detailtitle").eq(0).html(data);
    })     
});


/* 출판사 서평 텍스트 가져오기 */

$(function(){
    $.get("./sub_txt/sub_publish.txt", function(data) {
        $(".detailtitle").eq(1).html(data);
    })     
});




/* 목차 텍스트 가져오기 */

$(function(){
    $.get("./sub_txt/sub_list.txt", function(data) {
        $(".detailtitle").eq(2).html(data);
    })     
});


/* 본문중에서 텍스트 가져오기 */

$(function(){
    $.get("./sub_txt/sub_med.txt", function(data) {
        $(".detailtitle").eq(3).html(data);
    })     
});


