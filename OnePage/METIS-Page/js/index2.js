if (window.innerWidth > 1025) {
    window.location.href =
        "https://www.digiwin.com/tw/dsc/METIS/web/index.html";
} else {
    window.location.href = "#top1";
}
// 第三屏
var Swiper3 = new Swiper("#sw3", {
    slidesPerView: 1.8,
    spaceBetween: "2%",
    // centeredSlides: true,
    slideToClickedSlide: true,
    // onlyExternal: true,
    // effect: 'fade',
    // direction: 'vertical',
    slidesPerGroup: 1,
    // mousewheelForceToAxis: true,
    speed: 800,
    nextButton: ".sw3_rt",
    prevButton: ".sw3_lf",
    breakpoints: {
        540: {
            slidesPerView: 1.3,
            spaceBetween: "5%",
        },
    },
});
// Swiper3.setWrapperTranslate(0);

function sw3(x) {
    // console.log();
    if (x != 0) {
    } else {
        setTimeout(function () {
            // Swiper3.setWrapperTranslate(0);
        }, 810);
        // Swiper3.lockSwipeToPrev();
    }
}
var if_t = false;
$("#nav-icon").click(function () {
    if_t = !if_t;
    if (if_t) {
        $(this).addClass("open");
        $(".ph_nav").addClass("on");
    } else {
        $(this).removeClass("open");
        $(".ph_nav").removeClass("on");
    }
});
$(".ph_nav>p").click(function () {
    $("html,body").animate({
        scrollTop: $(".ph_dh").eq($(this).index()).offset().top,
    });
});
// $('.top3 ul>li>video').eq(0)[0].play();
// $('.top3 .swiper-slide').click(function () {
//     $('.top3 ul>li>video').eq(0).attr('src', $(this).attr('url'));
//     $('.top3 ul>li>video').eq(0)[0].play();
// })
var pingheight = window.innerHeight;
var ph_a = 0;
window.onscroll = function () {
    var top3_top = $(".top3").eq(0)[0].getBoundingClientRect();
    if (top3_top.top < pingheight * 0.6) {
        ph_a++;
    } else {
    }
    if (ph_a == 2) {
        $(".top3 ul>li>video")
            .eq(0)
            .attr("src", $(".top3 .swiper-slide").eq(0).attr("url"));
        $(".top3 ul>li>video").eq(0)[0].play();
    }
};
$(".top3 .swiper-slide").click(function () {
    // $('.sj_video').addClass('on');
    $(".sj_video>div>video").eq(0).attr("src", $(this).attr("url"));
    $(".top3 ul>li>video").eq(0).attr("src", $(this).attr("url"));
    $(".top3 ul>li>video").eq(0)[0].play();
});
$(".vid_close").click(function () {
    $(".sj_video").removeClass("on");
    $(".sj_video>div>video").eq(0)[0].pause();
});
$(".top3 ul>li>span").click(function () {
    $(".sj_video").addClass("on");
    $(".sj_video>div>video")
        .eq(0)
        .attr("src", $(".top3 ul>li>video").eq(0).attr("src"));
    $(".sj_video>div>video").eq(0)[0].play();
});
//第4屏
var Swiper4 = new Swiper("#sw4", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: ".scrollbar4",
    paginationClickable: true,
    // autoHeight: true
});
// 第7屏
var Swiper7 = new Swiper("#sw7", {
    slidesPerView: 1,
    spaceBetween: "4%",
    // direction: 'vertical',
    scrollbar: ".scrollbar7",
    scrollbarHide: false,
    scrollbarDraggable: true,
    // scrollbarSnapOnRelease: true,
    // mousewheelControl: true,
});
// $('.top1>span>video').eq(0)[0].play();
