$(document).ready(function() {
    $(".hom p").on("mouseenter", function() {
        $(".hom > .hidden-drop-menu").removeClass("showHiddenMenuR").addClass("showHiddenMenu");
    });

    $(".hom").on("mouseleave", function() {
        $(".hom > .hidden-drop-menu").removeClass("showHiddenMenu").addClass("showHiddenMenuR");
    });

    $(".proj p").on("mouseenter", function() {
        $(".proj > .hidden-drop-menu").removeClass("showHiddenMenuR").addClass("showHiddenMenu");
    });

    $(".proj").on("mouseleave", function() {
        $(".proj > .hidden-drop-menu").removeClass("showHiddenMenu").addClass("showHiddenMenuR");
    });


    $(".serv p").on("mouseenter", function() {
        $(".serv > .hidden-drop-menu").removeClass("showHiddenMenuR").addClass("showHiddenMenu");
    });

    $(".serv").on("mouseleave", function() {
        $(".serv > .hidden-drop-menu").removeClass("showHiddenMenu").addClass("showHiddenMenuR");
    });

    $(".blg p").on("mouseenter", function() {
        $(".blg > .hidden-drop-menu").removeClass("showHiddenMenuR").addClass("showHiddenMenu");
    });

    $(".blg").on("mouseleave", function() {
        $(".blg > .hidden-drop-menu").removeClass("showHiddenMenu").addClass("showHiddenMenuR");
    });

    $(".src i").on("mouseenter", function() {
        $(".src-input").css({
            "display": "block", 
            "z-index": "2"
        });
    });

    $(".src i").on("mouseleave", function() {
        $(".src-input").css("display", "none");
    });

    //sticky nav
    var nav = $(".navigation");

    $(window).scroll(function() {
        if ($(this).scrollTop()>65) {
            nav.addClass("nav-scrolled");
        } else {
            nav.removeClass("nav-scrolled");
        }
    });


    //burger menu
    $(".burger").on("click", function() {
        $(".burger > .container > .one").toggleClass("move-one-r").toggleClass("move-one");
        $(".burger > .container > .two").toggleClass("move-two-r").toggleClass("move-two");
        $(".burger > .container > .three").toggleClass("move-three-r").toggleClass("move-three");
        $(".burger > .hidden-menu-burger").toggleClass("burger-hidden").addClass("show-burger-hidden");
    });

    //search 
    $(".search").on("click", function() {
        $(".hidden-search").toggleClass("show-search");
    });
});