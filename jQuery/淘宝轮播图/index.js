var index = 0,
    num = 5,
    itemWidth = 520,
    timer;

timerFun();

function move(direction) {
    clearTimeout(timer);
    $(".img-box").stop(false, true);
    if (direction == "next") {
        index++;
        if (index > num) {
            $(".img-box").css({
                left: 0
            });
            index = 1;
        }
    } else if (direction == "prev") {
        index--;
        if (index < 0) {
            $(".img-box").css({
                left: num * -itemWidth
            });
            index = num - 1;
        }
    }
    $(".img-box").animate({
        left: index * -itemWidth
    }, function () {
        timerFun();
    });
    active($(".item").eq(index == num ? 0 : index));
}

function timerFun() {
    timer = setTimeout(function () {
        move("next");
    }, 3000);
}

function active(dom) {
    $(".active").removeClass("active");
    dom.addClass("active");
}

$(".prevBtn").click(function () {
    move("prev");
});

$(".nextBtn").click(function () {
    move("next");
});

$(".item").click(function () {
    index = $(this).index();
    move("");
});