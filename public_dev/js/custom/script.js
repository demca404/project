$(document).ready(function () {
    $(".arrow_triangle").click(function () {
        $(".arrow_triangle").css({
            transform: 'rotate(90deg)'
        });
        $(".answer").slideToggle(300);
        $(".field").show();
    });
    $(".field").click(function () {
        $(".icon").css({
            "background-image": 'url(/images/icon.png)'
        });
        $(".hide_menu").slideUp(300);
        $(".field").hide();
    });
});