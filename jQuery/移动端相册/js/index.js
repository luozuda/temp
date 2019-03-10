var total = $('li').length;
var viewWidth = $(window).width();
var viewHeight = $(window).height();
var aspectRatio = viewHeight / viewWidth;
var squareWidth = (viewWidth - 12) / 4;
var index = 0;
// 列表状态样式
function init() {
    $('.list').css({
        width: '100%',
        left: 0
    });
    $('li').css({
        width: squareWidth,
        height: squareWidth,
        margin: '1.5px'
    });
    $('img').css({
        width: '100%',
        height: 'auto'
    });
}
init();

// 图片展开样式
function show() {
    $('.list').css({
        width: total * viewWidth,
        left: 0
    });
    $('li').css({
        width: viewWidth,
        height: viewHeight,
        margin: 0
    });
    ratio();
}

// 点击图片
$('.list').on('tap', 'li', function () {
    show();
    //类似轮播图
    index = $('.list li').index($(this));
    $('.list').css({
        left: -index * viewWidth + 'px'
    });

    $('.list').on('swipeLeft swipeRight', function (e) { //左右滑动图片
        if (e.type == 'swipeLeft') {
            slider(1);
        } else {
            slider(-1);
        }
    }).on('swipeDown', function () { //向下滑回到列表
        init();
        $('.list').off('swipeLeft swipeRight swipeDown')
    })

});

// 左右滑动
function slider(num) {
    if (num < 0) {
        if (index <= 0) return;
    } else {
        if (index >= total - 1) return;
    }
    index += num;
    $('.list').animate({
        left: -index * viewWidth + 'px'
    }, 200);
}

// 判断图片宽高比是否超过屏幕宽高比
function ratio() {
    $('img').each(function (i, ele) {
        var imgAspectRatio = $(ele).height() / $(ele).width();
        if (imgAspectRatio > aspectRatio) {
            $(ele).css({
                height: '100%',
                width: 'auto'
            });
        }
    });
}