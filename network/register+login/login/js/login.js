var loginTabs = document.getElementById("loginTabs"); //选项卡 登录
var registerTabs = document.getElementById("registerTabs"); //选项卡 注册

var login = document.getElementsByClassName('login')[0]; //登录块
var usernameLogin = document.getElementById('username-login'); //登录名
var pwdLogin = document.getElementById('pwd-login'); //登录密码
var btnLogin = document.getElementById('btn-login'); //登录提交按钮

var register = document.getElementsByClassName('register')[0]; //注册块
var usernameRegister = document.getElementById('username-register'); //注册名
var pwdRegister = document.getElementById('pwd-register'); //注册密码
var pwd2Register = document.getElementById('pwd2-register'); //确认密码
var btnRegister = document.getElementById('btn-register'); //注册提交按钮

function init() {
    var search = location.search.slice(1).split('&');
    var len = search.length;
    for (var i = 0; i < len; i++) {
        if (search[i] == 'url=register') {
            registerTabs.click();
        }
    }
}

btnLogin.onclick = function (e) {
    e.preventDefault();
    var name = usernameLogin.value;
    var password = pwdLogin.value;
    var str = 'name=' + name + '&password=' + password;
    ajax('POST', 'http://vip.chanke.xyz/mi/login', cbs, str, true);
}

btnRegister.onclick = function (e) {
    e.preventDefault();
    var name = usernameRegister.value;
    var password = pwdRegister.value;
    var password2 = pwd2Register.value;
    if (password == password2) {
        var str = 'name=' + name + '&password=' + password;
        ajax('POST', 'http://vip.chanke.xyz/mi/register', cbs, str, true);
    }
}

function cbs(data) {
    var data = JSON.parse(data);
    if (data.errorCode == 0) {
        location.href = './index.html';
    } else {
        alert(data.errorMessage);
    }
}

loginTabs.onclick = function () {
    register.style.display = "none";
    login.style.display = "block";
    loginTabs.className = "tabs-link select";
    registerTabs.className = "tabs-link";
}
registerTabs.onclick = function () {
    register.style.display = "block";
    login.style.display = "none";
    loginTabs.className = "tabs-link";
    registerTabs.className = "tabs-link select";
}

init();