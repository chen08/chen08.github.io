var t = new Canvi({
    content: ".js-canvi-content",
    isDebug: !1,
    navbar: ".myCanvasNav",
    openButton: ".js-canvi-open-button--left",
    position: "left",
    pushContent: !1,
    speed: "0.2s",
    width: "100vw",
    responsiveWidths: [ {
        breakpoint: "600px",
        width: "280px"
    }, {
        breakpoint: "1280px",
        width: "320px"
    }, {
        breakpoint: "1600px",
        width: "380px"
    } ]
});
var canviRight = new Canvi({
    content: '.js-canvi-content',
    navbar: '.js-canvi-navbar--right',
    openButton: '.js-canvi-open-button--right',
    position: "right"
});

$(function(){
    

//顶部导航切换
// $("#demo-list li").click(function(){
//     $("#demo-list li.active").removeClass("active")
//     $(this).addClass("active");
// })	

 // nav收缩展开
 $('.nav-item>a').on('click',function(){
    if (!$('.nav').hasClass('nav-mini')) {
        if ($(this).next().css('display') == "none") {
            //展开未展开
            $('.nav-item').children('ul').slideUp(300);
            $(this).next('ul').slideDown(300);
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
        }else{
            //收缩已展开
            $(this).next('ul').slideUp(300);
            $('.nav-item.nav-show').removeClass('nav-show');
        }
    }
});







})