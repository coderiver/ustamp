$(document).ready(function() {

// none transition effects
    $.mobile.defaultPageTransition = 'none';

// Show/hide menu sidebar
    $(".btn-menu").click(function(){
        if ($(this).hasClass("js-active")) {
            $(".btn-menu").removeClass("js-active");
            $("body").removeClass("is-with-sidebar");
        }
        else {
            $(".btn-menu").addClass("js-active");
            $("body").addClass("is-with-sidebar");
        }
        
    });
    $(".js-overlay").click(function(){
        $("body").removeClass("is-with-sidebar");
        $(".btn-menu").removeClass("js-active");
    });
});