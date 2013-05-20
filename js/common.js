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

// Left swipe
    $('.slide').on( 'swipeleft', swipeleftHandler );
    function swipeleftHandler(event){
        $(".slider").removeClass("is-right-swipe");
        $(".slider").addClass("is-left-swipe");
        $(".slide").removeClass("is-disabled");
        $(this).next().addClass("is-active");
        $(this).addClass("is-disabled");
        $(this).removeClass("is-active");
    }
    $('.slide').last().on( 'swipeleft', swipeleftHandlerLast );
    function swipeleftHandlerLast(event){
        $(".slider .slide:first").addClass("is-active");
        $(this).removeClass("is-active");
    }
// Right swipe
    $('.slide').on( 'swiperight', swiperightHandler );
    function swiperightHandler(event){
        $(".slider").removeClass("is-left-swipe");
        $(".slider").addClass("is-right-swipe");
        $(".slide").removeClass("is-disabled");
        $(this).prev().addClass("is-active");
        $(this).removeClass("is-active");
        $(this).addClass("is-disabled");
    }
    $('.slide:first').on( 'swiperight', swiperightHandlerFirst );
    function swiperightHandlerFirst(event){
        $(".slider .slide:last").addClass("is-active");
        $(this).removeClass("is-active");
    }


});
