var oAudio = document.getElementsByTagName("audio")[0],
    oCurrentSrc = document.getElementById("currentSrc"),
    oCurrentTime = document.getElementsByClassName("current-time")[0],
    oDurationTime = document.getElementsByClassName("duration-time")[0],
    oBtn = document.getElementsByClassName("btn")[0].getElementsByTagName("i")[1],
    oProActive = document.getElementsByClassName("pro-active")[0];
var timer;

window.onload = function () {
    var src = decodeURI(oAudio.currentSrc);
    oCurrentSrc.innerHTML = src.substring(src.lastIndexOf("/") + 1);

    oCurrentTime.innerHTML = conversion(oAudio.currentTime);
    oDurationTime.innerHTML = conversion(oAudio.duration);
}

function conversion(num) {
    var sec = parseInt(num % 60) < 10 ? "0" + parseInt(num % 60) : parseInt(num % 60);
    var min = parseInt(num / 60) < 10 ? "0" + parseInt(num / 60) : parseInt(num / 60);
    return min + ":" + sec;
}

oBtn.onclick = function () {
    if (oAudio.paused) {
        oAudio.play();
        oBtn.className = "iconfont icon-pause";
        timer = setInterval(function () {
            oProActive.style.width = oProActive.offsetWidth + 10 + "px";
        }, 200);
    } else {
        clearInterval(timer);
        oAudio.pause();
        oBtn.className = "iconfont icon-bofang";
    }
}