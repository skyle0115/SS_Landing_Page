$(document).ready(function() {
    $(".banner-text").hide();
    $(".banner-text").fadeIn("slow", function() {
        $('.banner-img img').addClass('animated slideInUp');
    });
});
