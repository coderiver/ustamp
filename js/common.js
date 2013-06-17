$(document).ready(function() {

// ---------------- none transition effects ----------- //
    $.mobile.defaultPageTransition = 'none';

// --------------- Show/hide menu sidebar ------------- //
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

// ------------ CSS slider (created by CR) -------------- //
$(".js-slider").each(function(){

    // init variables
        var slider = $(this);
        var slide = $(this).children(".slide");
        var slide_first = $(this).children(".slide:first");
        var pager = slider.parent().find(".js-slider-pager");
        var n = slide.length;
        slide_first.addClass("is-active");

    // add pager
        pager.html("<span></span>");
        var last_pager = pager.children().last();
        var first_pager = pager.children().first();
        first_pager.addClass("is-active");
        for (i = 1; i < n; i++) {
            $('<span></span>').insertAfter(last_pager);
        } 

    // Left swipe
        slide.on( 'swipeleft', swipe_left);
        function swipe_left(event){
            slider.removeClass("is-right-swipe").addClass("is-left-swipe");;
            slide.removeClass("is-disabled");
            $(this).next().addClass("is-active");
            $(this).addClass("is-disabled");
            $(this).removeClass("is-active");

            index_slide = slide.index($(this).next());
            pager.children().each(function(){
                if ($(this).index() == index_slide) {
                    pager.children().removeClass("is-active");
                    $(this).addClass("is-active");
                }
            });

        }
    // Left swipe last slide
        slide.last().on( 'swipeleft', swipe_left_last);
        function swipe_left_last(event){
            slide.first().addClass("is-active");
            $(this).removeClass("is-active");
            index_slide = slide.index($(this));
            pager.children().each(function(){
                if ($(this).index() == index_slide) {
                    pager.children().removeClass("is-active");
                    pager.children().first().addClass("is-active");
                }
            });
        }

    // Right swipe
        slide.on( 'swiperight', swipe_right);
        function swipe_right(event){
            slider.removeClass("is-left-swipe").addClass("is-right-swipe");
            slide.removeClass("is-disabled");
            $(this).prev().addClass("is-active");
            $(this).removeClass("is-active");
            $(this).addClass("is-disabled");
            index_slide = slide.index($(this).prev());
            pager.children().each(function(){
                if ($(this).index() == index_slide) {
                    pager.children().removeClass("is-active");
                    $(this).addClass("is-active");
                }
            });
        }
    // Right swipe first element
        slide.first().on( 'swiperight', swipe_right_first);
        function swipe_right_first(event){
            slide.last().addClass("is-active");
            $(this).removeClass("is-active");
            index_slide = slide.index($(this));
            pager.children().each(function(){
                if ($(this).index() == index_slide) {
                    pager.children().removeClass("is-active");
                    pager.children().last().addClass("is-active");
                }
            });
        }
        
});

    var slide = $(".slide__item");
    slide.each(function(){
        var slider = $(this).parent();
        var i = slider.find(".slide__item").length;
        slider.addClass('slide__list-'+i);
    });

});
