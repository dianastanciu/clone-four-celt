const nav = $(".navigation");
const winWidth = $(window).width();
if (winWidth <= 767) {
    $(window).scroll(function() {
        if ($(this).scrollTop()>180) {
            nav.addClass("nav-scrolled");
            $(".top-bar-container").css("opacity", "0");
        } else {
            nav.removeClass("nav-scrolled");
            $(".top-bar-container").css("opacity", "1");
        }
    });
} else if (winWidth >= 768) {
    $(window).scroll(function() {
        if ($(this).scrollTop()>65) {
            nav.addClass("nav-scrolled");
            $(".top-bar-container").css("opacity", "0");
        } else {
            nav.removeClass("nav-scrolled");
            $(".top-bar-container").css("opacity", "1");
        }
    });
}

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


    

    //burger menu
    $(".burger > .container").on("click", function() {
        $(".burger > .container > .one").toggleClass("move-one-r").toggleClass("move-one");
        $(".burger > .container > .two").toggleClass("move-two-r").toggleClass("move-two");
        $(".burger > .container > .three").toggleClass("move-three-r").toggleClass("move-three");
        $(".burger > .hidden-menu-burger").toggleClass("burger-hidden").addClass("show-burger-hidden");
    });

    //search 
    $(".search").on("click", function() {
        $(".hidden-search").toggleClass("show-search");
    });


    //burger hidden menu 
    $(".burger > .hidden-menu-burger > .hom ").on("click", function() {
        $(".burger > .hidden-menu-burger > .hom > .hidden-drop-menu").toggleClass("showHiddenMenuR-mobile").toggleClass("showHiddenMenu-mobile");
        $(".abt").toggleClass("move-home");
        $(".burger > .hidden-menu-burger > .hom > .fa-plus").toggleClass("hide-plus");
    });
    
    $(".burger > .hidden-menu-burger > .proj ").on("click", function() {
        $(".burger > .hidden-menu-burger > .proj > .hidden-drop-menu").toggleClass("showHiddenMenuR-mobile").toggleClass("showHiddenMenu-mobile");
        $(".serv").toggleClass("move-proj");
        $(".burger > .hidden-menu-burger > .proj > .fa-plus").toggleClass("hide-plus");
    });
    
    $(".burger > .hidden-menu-burger > .serv ").on("click", function() {
        $(".burger > .hidden-menu-burger > .serv > .hidden-drop-menu").toggleClass("showHiddenMenuR-mobile").toggleClass("showHiddenMenu-mobile");
        $(".blg").toggleClass("move-serv");
        $(".burger > .hidden-menu-burger > .serv > .fa-plus").toggleClass("hide-plus");
        $("body").toggleClass("noScroll");
    });


    $(".burger > .hidden-menu-burger > .blg ").on("click", function() {
        $(".burger > .hidden-menu-burger > .blg > .hidden-drop-menu").toggleClass("showHiddenMenuR-mobile").toggleClass("showHiddenMenu-mobile");
        $(".cntc").toggleClass("move-blg");
        $(".burger > .hidden-menu-burger > .blg > .fa-plus").toggleClass("hide-plus");
    });
});