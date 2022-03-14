jQuery(function ($) {
    $.scrollTo(0); // reset scrolla
    $('#linkPS').click(function () { $.scrollTo($('#pres_Simple'), 500); });
    $('#linkPC').click(function () { $.scrollTo($('#pres_Cont'), 500); });
    $('#linkPP').click(function () { $.scrollTo($('#pres_Perfect'), 500); });
    $('#linkPastS').click(function () { $.scrollTo($('#past_S'), 500); });
    $('#linkPastC').click(function () { $.scrollTo($('#past_Cont'), 500); });
    $('#linkPastP').click(function () { $.scrollTo($('#past_Perf'), 500); });
    $('#linkFS').click(function () { $.scrollTo($('#future_S'), 500); });
    $('#linkFC').click(function () { $.scrollTo($('#future_Cont'), 500); });
    $('#linkFP').click(function () { $.scrollTo($('#future_Perf'), 500); });
    $('.scrollUp').click(function () { $.scrollTo($('.container'), 1000); });
});
// pokazanie przycisku podczas przewijania
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollUp').fadeIn();
    else $('.scrollUp').fadeOut();
});