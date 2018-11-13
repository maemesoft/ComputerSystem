$(document).ready(function(){
    $("#home_image").hide();
    $(".Thumbnailss1").hide();
    $(".Thumbnailss2").hide();
    $(".Thumbnailss3").hide();

    $(".navbar-toggler-icon").click(function(){
        $("#nav_menu").slideToggle(400);
    });

    $("#btn_1").click(function(){
        $(".Thumbnailss1").slideToggle(400);
    });

    $("#btn_2").click(function(){
        $(".Thumbnailss2").slideToggle(400);
    });

    $("#btn_3").click(function(){
        $(".Thumbnailss3").slideToggle(400);
    });



    $("#menu_1").click(function(){
        location.href="intro.html";
    });
    $("#menu_2").click(function(){
        location.href="detail.html";
    });
    $("#menu_3").click(function(){
        location.href="about.html";
    });
    $("#mari").click(function(){
        location.href="sketch_181107b/index.html";
    });

    $(".home_area").click(function(){
        $("#home_image").fadeToggle(400);
    });
});