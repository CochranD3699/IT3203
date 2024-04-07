$(function() {

    $(".box").mouseenter(function(){
        $(".block").css({"visibility": "hidden"});
        $("p1").css({"visibility": "visible"});
        $(".movie").css({"visibility": "visible"});
    });
});

function peek() {
    var pic = $(".pictures");
    pic.animate({opacity: "0.1"},3000);
    pic.animate({opacity: "1"},9000);
    clearInterval(interval)
  }
  
  $(function() {
    $("button").click(function(){
       $("button").text("nobody's perfect, but I have to be damn close! What other Marine would be able to put up with the US Army for 15 years.");
    });
  });

