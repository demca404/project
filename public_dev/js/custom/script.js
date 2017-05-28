$(document).ready(function () {
    $(".icon").click(function () {
        $(".icon").css({
            "background-image": 'url(/images/icon_x.png)'
        });
        $(".hide_menu").slideToggle(300);
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