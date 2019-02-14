// close();
onmessage = function (e) {
    console.log(e.data);
    var val = e.data * 10 * 10 * 10;
    postMessage(val);
}