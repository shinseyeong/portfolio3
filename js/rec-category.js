/*분야별추천-인문*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"문학", size:6},
    headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
  })
    .done(function( msg ) {

      // for문 (8개)
        var divs = $('.lec li');
        
        for(var i=0; i<divs.length; i++){

              $(".lec li img").eq(i).attr("src", msg.documents[i].thumbnail);
              $(".lec li .title").eq(i).text(msg.documents[i].title);
              $(".lec li span").eq(i).text(msg.documents[i].price+"원");

              var str=msg.documents[i].contents;              

        }

    });


    /*분야별추천-인문*/
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"인문", size:6},
      headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
    })
      .done(function( msg ) {
  
        // for문 (8개)
          var divs = $('.log li');
          
          for(var i=0; i<divs.length; i++){
  
                $(".log li img").eq(i).attr("src", msg.documents[i].thumbnail);
                $(".log li .title").eq(i).text(msg.documents[i].title);
                $(".log li span").eq(i).text(msg.documents[i].price+"원");
  
                var str=msg.documents[i].contents;              
  
          }
  
      });


       /*분야별추천-경제*/
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"경제", size:6},
      headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
    })
      .done(function( msg ) {
  
        // for문 (8개)
          var divs = $('.eco li');
          
          for(var i=0; i<divs.length; i++){
  
                $(".eco li img").eq(i).attr("src", msg.documents[i].thumbnail);
                $(".eco li .title").eq(i).text(msg.documents[i].title);
                $(".eco li span").eq(i).text(msg.documents[i].price+"원");
  
                var str=msg.documents[i].contents;              
  
          }
  
      });


 /*분야별추천-유아*/
 $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"유아", size:6},
  headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
})
  .done(function( msg ) {

    // for문 (8개)
      var divs = $('.kid li');
      
      for(var i=0; i<divs.length; i++){

            $(".kid li img").eq(i).attr("src", msg.documents[i].thumbnail);
            $(".kid li .title").eq(i).text(msg.documents[i].title);
            $(".kid li span").eq(i).text(msg.documents[i].price+"원");

            var str=msg.documents[i].contents;              

      }

  });


   /*분야별추천-학습*/
 $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"학습" },
  headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
})
  .done(function( msg ) {

    // for문 (8개)
      var divs = $('.tch li');
      
      for(var i=0; i<divs.length; i++){

            $(".tch li img").eq(i).attr("src", msg.documents[i].thumbnail);
            $(".tch li .title").eq(i).text(msg.documents[i].title);
            $(".tch li span").eq(i).text(msg.documents[i].price+"원");

            var str=msg.documents[i].contents;              

      }

  });


    /*분야별추천-외국도서*/
 $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"해리포터"},
  headers:{Authorization: "KakaoAK 4bf461e93a6468a0743e54fe69f1bc02"}
})
  .done(function( msg ) {

    // for문 (8개)
      var divs =$('.eng li');
      
      for(var i=0; i<divs.length; i++){

            $(".eng li img").eq(i).attr("src", msg.documents[i].thumbnail);
            $(".eng li .title").eq(i).text(msg.documents[i].title);
            $(".eng li span").eq(i).text(msg.documents[i].price+"원");

            var str=msg.documents[i].contents;              

      }

  });
