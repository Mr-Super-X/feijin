(function(){
  var $nav = $(".info-2 .info2-nav>li");
  var $list = $(".info-2 .list-1");
  var index;
  $nav.click(function(){
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $list.stop(true,true).fadeOut().eq(index).stop(true,true).fadeIn();
  })
})()