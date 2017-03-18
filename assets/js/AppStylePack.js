/*
	Document	: Application Style Package
	Type		: Java Script (JS)
	Author		: Jeshad Khan (http://www.facebook.com/JeshadKhan.Official)
	Description	: © 2015.
*/



/* Go Back To Top Button */

$(document).ready(function () {
    // show or hide the sticky footer
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.to-top').fadeIn(500);
        }
        else {
            $('.to-top').fadeOut(700);
        }
    });
    // animate the scroll to top
    $('.to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    })
})


/* Pretty-Photo Trigger */

$(document).ready(function () {

    $("area[rel^='prettyPhoto']").prettyPhoto();

    $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({ animation_speed: 'normal', theme: 'light_square', slideshow: 3000, autoplay_slideshow: false, social_tools: "" });
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({ animation_speed: 'fast', slideshow: 10000, hideflash: true });

});
