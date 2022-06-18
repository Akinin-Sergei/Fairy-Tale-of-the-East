$(function () {
    /* Slider__history */
    $('.history__section-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="history__section-slider-btn history__section-slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="history__section-slider-btn history__section-slider-btnnext"><img src="img/arrow-right.png" alt=""></button>'

    });
});



/* Smooth scroll */
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});



/* Slider__reviews */
$('.reviews__section-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="reviews__section-slider-btn reviews__section-slider-btnprev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="reviews__section-slider-btn reviews__section-slider-btnnext"><img src="img/arrow-right.png" alt=""></button>'

});



/* Fixed Header */
var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();


checkScroll(scrollOffset);

$(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if (scrollOffset > introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}