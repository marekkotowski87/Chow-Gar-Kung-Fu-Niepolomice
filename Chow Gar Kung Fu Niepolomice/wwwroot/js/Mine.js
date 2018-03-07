$(document).ready(function () {

    $('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $(window).on('resize', function () {
        if (($(window).width() >= 991) && ($(window).width() <= 1199)) {
            $(".my-menu-item").css("cssText", "font-size: 17px !important;");
        } else {
            $(".my-menu-item").css("cssText", "font-size: 22px !important;");
        }
});
});