$(function() {
    $(".alink").hover(function(){
        $(this).parent().find(".dpic").toggleClass('dh_hover');
    });
    $(".nav_name").hover(function(){
        $(this).children(".cur").toggleClass('nav_hover')
        $(this).children(".curjs").next().toggle();
    });
    $(".nav_history .jl").hover(function(){
        $(this).children('.tname').toggleClass('nav_hover')
        $(this).children().next().toggle();
    });
    $(".mb_search").click(function(){
        $(this).next().toggle();
    });
    $(".gb1").click(function(){
        $(this).parent().parent().hide();
    });
    $(".from li").click(function(){
        $(this).parent().parent().toggleClass("from-on");
    });
    $(window).scroll(function() {   
        if($(window).scrollTop() >= 300){
            $('.gotop').fadeIn(400); 
        }else{    
            $('.gotop').fadeOut(400);    
        }  
    });
    $('.gotop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    }); 
});
function setTab(name,name2,cursel,n){
    for(i=1;i<=n;i++){
    var menu=document.getElementById(name+i);
    var con=document.getElementById(name2+i);
    menu.className=i==cursel?"on":"";
    con.style.display=i==cursel?"block":"none";
}};
$(function(){
  var menuwidth  = 240;
  var menuspeed  = 400;
  
  var $bdy       = $('body');
  var $container = $('#pgcontainer');
  var $burger    = $('#menu_right');
  var negwidth   = "-"+menuwidth+"px";
  var poswidth   = menuwidth+"px";
  
  $('.menubtn').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    } else {
      jsAnimateMenu('open');
    }
    $(this).children().toggleClass('closebtn_bg');
  });
  
  $('.overlay').on('click', function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    }
    $('.menubtn_bg').removeClass('closebtn_bg');    
  });
  function jsAnimateMenu(tog) {
    if(tog == 'open') {
      $bdy.addClass('openmenu');
      
      $container.animate({marginLeft: negwidth, marginRight: poswidth}, menuspeed);
      $burger.animate({width: poswidth}, menuspeed);
      $('.overlay').animate({right: poswidth}, menuspeed);
    }
    
    if(tog == 'close') {
      $bdy.removeClass('openmenu');
      
      $container.animate({marginLeft: "0", marginRight: "0"}, menuspeed);
      $burger.animate({width: "0"}, menuspeed);
      $('.overlay').animate({right: "0"}, menuspeed);
    }
  }
});

$(document).ready(function(){

    $("div.aa .bb").hover(function(){
        $(this).addClass("hover").find("div.cc").show();
    },function(){
        $(this).removeClass("hover").find("div.cc").hide();
    });

});