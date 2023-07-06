/*서브-자기계발*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"돈", size:12},
    headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
  })
    .done(function( msg ) {

      // for문 (8개)
        var divs = $('.smart li');
        
        for(var i=0; i<divs.length; i++){

              $(".smart img").eq(i).attr("src", msg.documents[i].thumbnail);
              $(".smart li .txt a").eq(i).text(msg.documents[i].title);

              var str=msg.documents[i].contents;              

        }

    });

/*서브-이책을  조회한 회원이 구매*/
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"조언", size:12},
      headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
    })
      .done(function( msg ) {
  
        // for문 (8개)
          var divs = $('.viewcust li');
          
          for(var i=0; i<divs.length; i++){
  
                $(".viewcust img").eq(i).attr("src", msg.documents[i].thumbnail);
                $(".viewcust li .txt a").eq(i).text(msg.documents[i].title);
  
                var str=msg.documents[i].contents;              
  
          }
  
      });

/*서브-이책을 구매한 회원이 구매*/
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"시간관리", size:12},
  headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
})
  .done(function( msg ) {

    // for문 (8개)
      var divs = $('.customer li');
      
      for(var i=0; i<divs.length; i++){

            $(".customer img").eq(i).attr("src", msg.documents[i].thumbnail);
            $(".customer li .txt a").eq(i).text(msg.documents[i].title);

            var str=msg.documents[i].contents;              

      }

  });