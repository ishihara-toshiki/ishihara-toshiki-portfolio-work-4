
//パララックス
var images = document.querySelectorAll('.js-parallax');

new simpleParallax(images, {
	scale: 1.4,
    delay: 0.8,
    transition: 'cubic-bezier(0,0,0,.1)'
});


//ページトップボタン
$(function(){
    var pagetop = $('.js-page-top');
    
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});


//wowの初期化
new WOW().init();


//スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});


// モーダル 
$('.js-privacy').click(function(e) {
    e.preventDefault();
    $('.js-target-modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
});

$('.js-close-modal').click(function(e) {
    e.preventDefault();
    $('.js-target-modal').fadeOut();
    $('body,html').css('overflow-y', 'visible'); 
});