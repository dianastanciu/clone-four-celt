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

    //why choose us tabs
    //1
    //when click on tab one
    $(".tab.one").on("click", function() {
        //if tab two shows the contents
        if ($(".tab.two > .desc-container").hasClass("show")) {
            //hide tab two contents
                $(".tab.two > .desc-container").removeClass("show").addClass("hideR");
                //remove hide from plus 
                $(".tab.two > .tab-title > .icon-t > .fa-plus").removeClass("hiddenIcon");
                //add hide to minus
                $(".tab.two > .tab-title > .icon-t > .fa-minus").addClass("hiddenIcon");
            //move tab two down
            $(".tab.two").removeClass("moveUp").addClass("moveDown");
                
            //show tab one contents
            $(".tab.one > .desc-container").removeClass("hideR").addClass("show");
                //remove hide from minus
                $(".tab.one > .tab-title > .icon-t > .fa-minus").removeClass("hiddenIcon");
                //add hide to plus
                $(".tab.one > .tab-title > .icon-t > .fa-plus").addClass("hiddenIcon");
        } 
        //else if tab three shows the contents 
        else if ($(".tab.three > .desc-container").hasClass("show")) {
            //hide tab three contents
                $(".tab.three > .desc-container").removeClass("show").addClass("hideR");
                //remove hide from plus 
                $(".tab.three > .tab-title > .icon-t > .fa-plus").removeClass("hiddenIcon");
                //add hide to minus
                $(".tab.three > .tab-title > .icon-t > .fa-minus").addClass("hiddenIcon");
             //move tab two and three down
             $(".tab.two").removeClass("moveUp").addClass("moveDown");
             $(".tab.three").removeClass("moveThreeUp").addClass("moveDownThree");


            //show tab one contents
            $(".tab.one > .desc-container").removeClass("hideR").addClass("show");
                //remove hide from minus
                $(".tab.one > .tab-title > .icon-t > .fa-minus").removeClass("hiddenIcon");
                //add hide to plus
                $(".tab.one > .tab-title > .icon-t > .fa-plus").addClass("hiddenIcon");
        } 
    });

    //2
    //when click on tab two
    $(".tab.two").on("click", function() {
        //if tab one shows the contents
        if ($(".tab.one > .desc-container").hasClass("show")) {
            //hide tab one contents
                $(".tab.one > .desc-container").removeClass("show").addClass("hideR");
                //remove hide from plus 
                $(".tab.one > .tab-title > .icon-t > .fa-plus").removeClass("hiddenIcon");
                //add hide to minus
                $(".tab.one > .tab-title > .icon-t > .fa-minus").addClass("hiddenIcon");
            //move tab two up
            $(".tab.two").addClass("moveUp");
                //remove hide from minus
                $(".tab.two > .tab-title > .icon-t > .fa-minus").removeClass("hiddenIcon");
                //add hide to plus
                $(".tab.two > .tab-title > .icon-t > .fa-plus").addClass("hiddenIcon");
            //show tab two contents
            $(".tab.two > .desc-container").removeClass("hideR").addClass("show");
        } 
        //else if tab three shows the contents 
        else if ($(".tab.three > .desc-container").hasClass("show")) {
            //hide tab three contents
                $(".tab.three > .desc-container").removeClass("show").addClass("hideR");
                //remove hide from plus 
                $(".tab.three > .tab-title > .icon-t > .fa-plus").removeClass("hiddenIcon");
                //add hide to minus
                $(".tab.three > .tab-title > .icon-t > .fa-minus").addClass("hiddenIcon");
            //remove moveThreeUp and add moveDown
            $(".tab.three").removeClass("moveThreeUp").addClass("moveUp");
                //remove hide from minus
                $(".tab.two > .tab-title > .icon-t > .fa-minus").removeClass("hiddenIcon");
                //add hide to plus
                $(".tab.two > .tab-title > .icon-t > .fa-plus").addClass("hiddenIcon");
            //show tab two contents
            $(".tab.two > .desc-container").removeClass("hideR").addClass("show");
        } 
    });
        

    //3 
    //when click on tab three
    $(".tab.three").on("click", function() {
        //if tab one shows content
        if($(".tab.one > .desc-container").hasClass("show")) {
            //hide tab one contents
            $(".tab.one > .desc-container").removeClass("show").addClass("hideR");
                //remove hide from plus 
                $(".tab.one > .tab-title > .icon-t > .fa-plus").removeClass("hiddenIcon");
                //add hide to minus
                $(".tab.one > .tab-title > .icon-t > .fa-minus").addClass("hiddenIcon");
            //move tab two up
            $(".tab.two").addClass("moveUp");
            //move tab three up
            $(".tab.three").addClass("moveThreeUp");
                //remove hide from minus
                $(".tab.three > .tab-title > .icon-t > .fa-minus").removeClass("hiddenIcon");
                //add hide to plus
                $(".tab.three > .tab-title > .icon-t > .fa-plus").addClass("hiddenIcon");
            //show tab three contents
            $(".tab.three > .desc-container").removeClass("hideR").addClass("show");
        } 

        //else if tab two shows content
        else if($(".tab.two > .desc-container").hasClass("show")) {
            //hide tab two contents
            $(".tab.two > .desc-container").removeClass("show").addClass("hideR");
                //remove hide from plus 
                $(".tab.two > .tab-title > .icon-t > .fa-plus").removeClass("hiddenIcon");
                //add hide to minus
                $(".tab.two > .tab-title > .icon-t > .fa-minus").addClass("hiddenIcon");
            //move tab three up
            $(".tab.three").addClass("moveThreeUp");
                //remove hide from minus
                $(".tab.three > .tab-title > .icon-t > .fa-minus").removeClass("hiddenIcon");
                //add hide to plus
                $(".tab.three > .tab-title > .icon-t > .fa-plus").addClass("hiddenIcon");
            //show tab three contents
            $(".tab.three > .desc-container").removeClass("hideR").addClass("show");
        }
    });
});