$(function () {
    // 監聽scroll事件
    window.addEventListener("scroll", handleScroll);
    function handleScroll(event) {
        let element = document.querySelector(".c3 h5").offsetTop - 200;
        if (window.scrollY > element) {
            // 停止監聽scroll事件
            window.removeEventListener("scroll", handleScroll);
            $(".c3 iframe").attr(
                "src",
                "https://www.youtube.com/embed/5wKkmaIKOZY?autoplay=1&mute=1&enablejsapi=1"
            );
        }
    }

    enquire.register("screen and (min-width: 991px)", {
        match: function () {
            var TrandingSlider = new Swiper(".tranding-slider", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                // autoplay: {
                //     disableOnInteraction: false,
                //     delay: 5000,
                // },
                loop: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                },
                pagination: {
                    el: ".swiper-pagination8",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                on: {
                    click() {
                        TrandingSlider.slideTo(this.clickedIndex);
                        console.log("index", this.clickedIndex);
                    },
                },
            });
        },
    });

    enquire.register("screen and (max-width: 991px)", {
        match: function () {
            var TrandingSlider = new Swiper(".tranding-slider", {
                loop: true,
                slidesPerView: 1,
                // spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination8",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        },
    });
    $("body").addClass("on");
});

function naDown() {
    $(".nav").addClass("on");
    $(".nav").mouseover(function () {
        $(this).removeClass("on");
    });
    $(".nav").mouseleave(function () {
        $(this).addClass("on");
    });
}

function naUp() {
    $(".nav").removeClass("on");
    $(".nav").mouseover(function () {
        $(this).removeClass("on");
    });
    $(".nav").mouseleave(function () {
        $(this).removeClass("on");
    });
}
$(".nav>ul>li").click(function () {
    console.log(".nav>ul>li");
    $(this).addClass("on").siblings().removeClass("on");
    $(".qie>ul>li")
        .eq($(this).index())
        .addClass("on")
        .siblings()
        .removeClass("on");
    if ($(this).index() != 0) {
        naDown();
    } else {
        naUp();
    }
});
$(".qie>ul>li").click(function () {
    console.log(".qie>ul>li");
    console.log($(this).data("menuanchor"));
    $(this).addClass("on").siblings().removeClass("on");
    // Swiper1.slideTo($(this).index(), 2000, false);
    $(".nav>ul>li")
        .eq($(this).index())
        .addClass("on")
        .siblings()
        .removeClass("on");
    // window.location.href = "#top" + ($(this).index() + 1);
    window.location.href = "#" + $(this).data("menuanchor");
    if ($(this).index() != 0) {
        naDown();
    } else {
        naUp();
    }
});
window.onload = function () {
    setTimeout(function () {
        // 第三屏
        var Swiper3 = new Swiper("#sw3", {
            slidesPerView: 3,
            spaceBetween: "2%",
            // centeredSlides: true,
            slideToClickedSlide: true,
            onlyExternal: true,
            // effect: 'fade',
            // direction: 'vertical',
            slidesPerGroup: 1,
            // mousewheelForceToAxis: true,
            speed: 800,
            nextButton: ".sw3_rt",
            prevButton: ".sw3_lf",
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                },
            },
            onSlideNextStart: function (swiper) {
                // var ind = swiper.activeIndex;
                // $('.top3 ul>li').eq(ind).addClass('on').siblings().removeClass('on');
                // sw3(ind);
            },
            onProgress: function (swiper, progress) {
                if (parseFloat(progress.toFixed(1)) == 0.3) {
                    // alert('qew');
                }
            },
            onSlidePrevStart: function (swiper) {
                var ind = swiper.activeIndex;
                // $('.top3 ul>li').eq(ind).addClass('on').siblings().removeClass('on');
                // sw3(ind);
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
        $(".top3 .swiper-slide").click(function () {
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
        //第7屏
        var Swiper7 = new Swiper(".sw7", {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 7000,
            },
            pagination: {
                el: ".scrollbar7",
                clickable: true,
            },
        });
        const swiper3 = new Swiper(".CsTwo_1_swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
            },
        });
        const swiper33 = new Swiper(".sw7mb", {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: ".swiper-paginationsw7mb",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-nextsw7mb",
                prevEl: ".swiper-button-prevsw7mb",
            },
        });
    }, 1000);
};

// top5
$(".t5_circle").circleProgress({
    value: 0,
    size: 200, //大小
    startAngle: 90, //起始角度
    thickness: 20, //圆弧宽度
    emptyFill: "rgba(255,120,120,0)", //空缺底色
    fill: {
        gradient: ["#643bff", "#59A3F6"],
    },
});
var t5_num = 0;
$(".c4 .t5_rt .swiper-slide").mouseover(function () {
    // $(this).addClass('on').siblings().removeClass('on');
    t5_num++;
    if (t5_num == 1) {
        $(".t5_circle").circleProgress({
            value: $(this).attr("val"),
            size: 200, //大小
            startAngle: 90, //起始角度
            thickness: 20, //圆弧宽度
            emptyFill: "rgba(255,120,120,0)", //空缺底色
            fill: {
                gradient: ["#643bff", "#59A3F6"],
            },
        });
        $(".t5_txt").text($(this).attr("time"));
    }
});
$(".c4 .t5_rt .swiper-slide").mouseleave(function () {
    t5_num = 0;
});

$("#vid2 i").click(function () {
    $("#vid2").removeClass("on");
    $("#vid2 video").eq(0)[0].pause();
});

$(".nav-item").click(function () {
    $(".navbar-collapse").removeClass("show");
    $("#nav-icon").removeClass("open");
});
$(".navbar-toggler").click(function () {
    $("#nav-icon").toggleClass("open");
});

// =============================================================================
// 錨點連結
$(document).on("click", ".js-nav", function (event) {
    event.preventDefault();
    let delay = $(this).data("delay") ? $(this).data("delay") : 0;
    let target =
        $(this).attr("href") ||
        $(this).attr("xlink:href") ||
        $(this).data("target");
    setTimeout(() => {
        let offset = $(".page-submenu").outerHeight();
        let targetPos = $(target).offset().top;
        let finalPos = offset ? targetPos - offset : targetPos;
        window.scroll({ top: finalPos, left: 0, behavior: "smooth" });
    }, delay);
});
