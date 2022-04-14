var toggled = false;
var circle = $("#circle");

$("#toggle").click(function(){

    if(!toggled) {
        circle.css("margin-left", "100px");
        $("body").css("background-color", "black");
        $("h1").css("color", "white");
        toggled = true;
    } else {
        circle.css("margin-left", "1px");
        $("body").css("background-color", "white");
        $("h1").css("color", "black");
    }
});
