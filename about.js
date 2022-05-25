$(function(){

    var cursor=$("#cursor");
    var stalker=$("#mouse");

    var body = $("body");
    var flag = true;

    $(document).on("mousemove", function(e) {
        if (flag) {
        var x = e.clientX;
        var y = e.clientY;

        var star = $("<span>").attr("class", "star");
        star.css({
            "top": y + "px",
            "left": x + "px"
        });
        body.prepend(star);
        setTimeout(function() {
            star.remove();
        }, 2000);

        flag = false;
        setTimeout(function() {
            flag = true;
        }, 120);
        }
    });
    
    $(document).on("mousemove",function(e){
        var x=e.clientX;
        var y=e.clientY;
        cursor.css({
            "opacity":"1",
            "top":y+"px",
            "left":x+"px"
        });
        setTimeout(function(){
            stalker.css({
            "opacity":"1",
            "top":y+"px",
            "left":x+"px"
         });
         },140);
    });
});