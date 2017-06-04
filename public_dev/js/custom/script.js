$(document).ready(function () {
    $(".flex_question").click(function () {
        $(".flex_question").find(".arrow_triangle").removeClass('active').css("transform", "rotate(0deg)").next().slideUp('fast');
        $(this).find(".arrow_triangle").css({
            transform: 'rotate(90deg)'
        });
        $(this).find(".arrow_triangle").addClass('active');
        $(this).find(".arrow_triangle").next().slideDown('fast');
        });

    // $(".arrow_triangle").click(function () {
    //     $(".arrow_triangle").removeClass('active').css("transform", "rotate(0deg)").next().slideUp('fast');
    //     $(this).css({
    //         transform: 'rotate(90deg)'
    //     });
    //     $(this).addClass('active');
    //     $(this).next().slideDown('fast');
    // });
    
    $("#slider__check-1").click(function () {
        $(".slider__text").css({
            display: 'none'
        });
        $(".t1").css({
            display: 'block'
        })
    });
    $("#slider__check-2").click(function () {
        $(".slider__text").css({
            display: 'none'
        });
        $(".t2").css({
            display: 'block'
        })
    });
    $("#slider__check-3").click(function () {
        $(".slider__text").css({
            display: 'none'
        });
        $(".t3").css({
            display: 'block'
        })
    });
    $("#slider__check-4").click(function () {
        $(".slider__text").css({
            display: 'none'
        });
        $(".t4").css({
            display: 'block'
        })
    });
});