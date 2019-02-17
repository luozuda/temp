var oAudio = document.getElementsByTagName("audio")[0],
    oCurrentTime = document.getElementsByClassName("current-time")[0],
    oDurationTime = document.getElementsByClassName("duration-time")[0],

    oBtn = document.getElementsByClassName("btn")[0],
    oIsPlay = oBtn.getElementsByTagName("i")[1],
    oPrev = oBtn.getElementsByTagName("i")[0],
    oNext = oBtn.getElementsByTagName("i")[2],

    oProBox = document.getElementsByClassName("pro-box")[0],
    oProBg = document.getElementsByClassName("pro-bg")[0],
    oProActive = document.getElementsByClassName("pro-active")[0],
    oProRadioBox = document.getElementsByClassName("pro-radio-box")[0],

    oVolume = document.getElementsByClassName("volume")[0],
    oIsMuted = oVolume.getElementsByTagName("i")[0],
    oVolBox = document.getElementsByClassName("vol-box")[0],
    oVolBg = document.getElementsByClassName("vol-bg")[0],
    oVolActive = document.getElementsByClassName("vol-active")[0],
    oVolRadioBox = document.getElementsByClassName("vol-radio-box")[0],

    oCurrentSrc = document.getElementById("currentSrc"),
    oImg = document.getElementsByTagName("img")[0];

var timer,
    duration,
    radioRadius = document.getElementsByClassName("radio")[0].offsetWidth,
    bgOffsetWidth = 240,
    bgWidth = bgOffsetWidth - radioRadius,
    bgOffsetHeight = 50,
    bgHeight = bgOffsetHeight - radioRadius,
    index = 0,
    name;

var source = [{
    img:"./source/1.jpg",
    src: "./source/Alan Walker、Andy Mei - Faded (女声钢琴版).mp3"
}, {
    img:"./source/2.jpg",
    src: "./source/梁静茹 - 分手快乐 (CCTV音乐频道).mp3"
}, {
    img:"./source/3.jpg",
    src: "./source/薛之谦 - 演员.mp3"
}];
var len = source.length;

function init() {
    bindEvent();
    oAudio.src = source[index].src;
    oCurrentTime.innerHTML = conversion(0);
}
init();

function bindEvent() {
    oAudio.onloadedmetadata = function () {
        name = decodeURI(oAudio.currentSrc);
        oCurrentSrc.innerHTML = name.substring(name.lastIndexOf("/") + 1, name.lastIndexOf("."));
        oImg.src=source[index].img;

        duration = oAudio.duration;
        oDurationTime.innerHTML = conversion(duration);
    }

    oIsPlay.onclick = function () {
        if (oAudio.paused) {
            musicPlay();
        } else {
            musicPause();
        }
    }

    oAudio.onended = function () {
        changeMusic(1);
    }

    oProRadioBox.onmousedown = function () {
        clearInterval(timer);
        var c = oAudio.currentTime;

        document.body.onmousemove = function (e) {
            var newWidth = e.clientX - oProBox.getBoundingClientRect().left;
            if (newWidth < radioRadius) {
                newWidth = radioRadius;
            } else if (newWidth > bgOffsetWidth) {
                newWidth = bgOffsetWidth;
            }
            oProActive.style.width = newWidth + "px";
            c = (newWidth - radioRadius) / bgWidth * duration;
            oCurrentTime.innerHTML = conversion(c);
        }

        document.body.onmouseup = function () {
            document.body.onmousemove = null;
            document.body.onmouseup = null;
            oAudio.currentTime = c;
            musicPlay();
        }
    }

    oIsMuted.onclick = function () {
        if (oAudio.muted) {
            oAudio.muted = false;
            oIsMuted.className = "iconfont icon-laba";
            oVolActive.style.height = bgOffsetHeight + "px";
            oAudio.volume = 1;
        } else {
            oAudio.muted = true;
            oIsMuted.className = "iconfont icon-jingyin";
            oVolActive.style.height = radioRadius + "px";
        }
    }

    oVolRadioBox.onmousedown = function () {
        var v;
        oVolBox.onmousemove = function (e) {
            var newHeight = oVolBg.getBoundingClientRect().bottom - e.clientY;
            if (newHeight < radioRadius) {
                newHeight = radioRadius;
            } else if (newHeight > bgOffsetHeight) {
                newHeight = bgOffsetHeight;
            }
            oVolActive.style.height = newHeight + "px";
            v = (newHeight - radioRadius) / bgHeight;
            if (v == 0) {
                oAudio.muted = true;
                oIsMuted.className = "iconfont icon-jingyin";
                oAudio.volume = 0;
            } else if (v > 0 && v <= 1) {
                oAudio.muted = false;
                oIsMuted.className = "iconfont icon-laba";
                oAudio.volume = v;
            }
        }

        oVolBox.onmouseleave = function () {
            oVolBox.onmousemove = null;
            oVolBox.onmouseup = null;
            oVolBox.onmouseleave = null;
        }

        oVolBox.onmouseup = function () {
            oVolBox.onmousemove = null;
            oVolBox.onmouseup = null;
            oVolBox.onmouseleave = null;
        }
    }

    oPrev.onclick = function () {
        changeMusic(-1);
    }

    oNext.onclick = function () {
        changeMusic(1);
    }
}

function conversion(num) {
    var sec = parseInt(num % 60) < 10 ? "0" + parseInt(num % 60) : parseInt(num % 60);
    var min = parseInt(num / 60) < 10 ? "0" + parseInt(num / 60) : parseInt(num / 60);
    return min + ":" + sec;
}

function musicPlay() {
    oAudio.play();
    oIsPlay.className = "iconfont icon-pause";
    timer = setInterval(movePro, 200);
}

function musicPause() {
    oAudio.pause();
    oIsPlay.className = "iconfont icon-bofang";
    clearInterval(timer);
    oImg.style.animationPlayState = "paused";
}

function movePro() {
    var currentTime = oAudio.currentTime;
    oCurrentTime.innerHTML = conversion(currentTime);
    oProActive.style.width = currentTime / duration * bgWidth + radioRadius + "px";
    oImg.style.animation = "rotate 20s linear infinite";
}

function changeMusic(num) {
    musicPause();
    index += num;
    if (index < 0) {
        index = len - 1;
    } else if (index >= len) {
        index = 0;
    }
    oAudio.src = source[index].src;
    oAudio.load();
    oImg.style.animation = "";
    musicPlay();
}