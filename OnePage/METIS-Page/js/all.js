/*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
         为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
function getRem(pwidth, prem) {
    var html = document.getElementsByTagName("html")[0];
    var oWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = (oWidth / pwidth) * prem + "px";
}
window.onresize = function () {
    getRem(1920, 100);
};
getRem(1920, 100);
if (window.innerWidth > 1440) {
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 300,
            mobile: true,
            live: true,
        });
        wow.init();
        // new WOW().init();
    }
} else if (window.innerWidth < 1450 && window.innerWidth > 768) {
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 150,
            mobile: true,
            live: true,
        });
        wow.init();
        // new WOW().init();
    }
} else {
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 70,
            mobile: true,
            live: true,
        });
        wow.init();
        // new WOW().init();
    }
}
