$(function(){
  $('body').append('<button class="btn" />');
  $('.btn').click(function(){
    $('body').animate({'scrollTop': 1326}, 3000);
    $('html').animate({'scrollTop': 1326}, 3000);
});
});
$(function(){
  $('body').append('<button class="btn1" />');
  $('.btn1').click(function(){
    $('body').animate({'scrollTop': 0}, 3000);
    $('html').animate({'scrollTop': 0}, 3000);
});
});
$(window).scroll(function(){

  var st = $(this).scrollTop();
  console.log(st);

  $(".p2").css({
    "transform" : "translate(0%, -" + st/5 + "%"
  });
  $(".p1").css({
    "transform" : "translate(0%, -" + st/20 + "%"
  });
});
