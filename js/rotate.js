/*맨위 nav 부분 마우스올리면 메뉴창이나옴*/ 
$(function () {

    $('.big').mouseover(function () {

        $(this).children(' #off2').stop().slideDown();

        $(this).find("img").css({ 'transform': 'rotate(180deg)' });

    }).mouseout(function () {

        $('#off2').stop().slideUp();

        $(this).find("img").css({ 'transform': 'rotate(0deg)' });

    });

    $('.big').mouseover(function () {

        $(this).children(' #off1').stop().slideDown();

        $(this).find(".big img").css({ 'transform': 'rotate(180deg)' });

    }).mouseout(function () {

        $('#off1').stop().slideUp();

        $(this).find(".big img").css({ 'transform': 'rotate(0deg)' });

    });





});
