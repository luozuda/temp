function MobileAlbum(total, column) {
    this.total = total; //图片数量
    this.viewWidth = $(window).width(); //窗口宽度
    this.viewHeight = $(window).height(); //窗口高度
    this.aspectRatio = this.viewHeight / this.viewWidth; //高宽比
    this.marginRight = 3; //图片间距
    this.squareWidth = (this.viewWidth - this.marginRight * column) / column; //li的边长
    this.index = 0; //选择的图片索引
    this.init();
}

//列表状态样式
MobileAlbum.prototype.init = function () {
    $('.list').css({
        width: '100%',
        left: 0
    });
    $('.list>li').css({
        width: this.squareWidth,
        height: this.squareWidth,
        marginRight: this.marginRight + 'px'
    });
    $('.list>li>img').css({
        width: '100%',
        height: 'auto'
    });
};

//图片展开样式
MobileAlbum.prototype.show = function () {
    $('.list').css({
        width: this.total * (this.viewWidth + this.marginRight),
        left: -this.index * (this.viewWidth + this.marginRight) + 'px'
    });
    $('li').css({
        width: this.viewWidth,
        height: this.viewHeight
    });
    this.ratio(this.aspectRatio);
};

//判断图片高宽比是否超过屏幕高宽比
MobileAlbum.prototype.ratio = function (aspectRatio) {
    $('.list>li>img').each(function (i, ele) {
        var imgAspectRatio = $(ele).height() / $(ele).width();
        if (imgAspectRatio > aspectRatio) {
            $(ele).css({
                height: '100%',
                width: 'auto'
            });
        }
    });
};

//左右滑动
MobileAlbum.prototype.slider = function (num) {
    if (num < 0) {
        if (this.index <= 0) return;
    } else {
        if (this.index >= this.total - 1) return;
    }
    this.index += num;
    $('.list').animate({
        left: -this.index * (this.viewWidth + this.marginRight) + 'px'
    }, 200);
};