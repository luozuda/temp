//web浏览器
//ajax对象
//初始化HTTP请求参数（请求方式，地址，同步异步）
//发送请求
//监控数据
//检查数据 使用

//web浏览器
function ajax(method, url, callback, data, flag) {
    //ajax对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }

    //初始化HTTP请求参数（请求方式，地址，同步异步）

    //发送请求

    if (method == 'GET') {
        var date = new Date();
        timer = date.getTime();
        xhr.open(method, url + '?' + data + '$timer=' + timer, flag);
        xhr.send();
    } else {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    //监控数据 0 1 2 3 4
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            //检查数据 使用
            if (xhr.status == 200) {
                callback(xhr.responseText);
            }
        }
    }
}