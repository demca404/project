$(document).ready(function () {
    $('body').on('click', ".flex_question", function () {
        if (!$(this).find(".arrow_triangle").hasClass('active')) {
            $(".flex_question").find(".arrow_triangle").removeClass('active');
            $(".flex_question").find('.answer').slideUp('fast');
            $(this).find(".arrow_triangle").addClass('active');
            $(this).find(".answer").slideDown('fast');
        }
        });
    });