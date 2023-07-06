$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"어린이", size:8},
    headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
  })
    .done(function( msg ) {

        






      // for문 (8개)
        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $(".bookcorner-img img").eq(i).attr("src", msg.documents[i].thumbnail);
              $(".bookcorner-meta > .title").eq(i).text(msg.documents[i].title);
              $(".bookcorner-meta > .pricewrap ").eq(i).text(msg.documents[i].price+"원");


              var str=msg.documents[i].contents;
              

        }





    });