var action = "http://hg22236941.51mypc.cn:49270"; //后端地址
var token="";



function login(params) {
	$.ajax({
		type: "post",
		url: action + "/user/login",
		datatype: "json",
		data: params,
		async: false,
		success: function(responseData) {
			console.info(responseData);
			alert("登录成功")
			window.href = "index.html";
		},
		error: function(responseData) {
			console.info(responseData);
			alert(responseData.code)
			alert("登录失败")
		}
	});
}

function register(params) {
	$.ajax({
		type: "post",
		url: action + "/user/register",
		datatype: "json",
		data: params,
		async: false,
		success: function(responseData) {
			console.info(responseData);
			alert("注册成功")
			window.href = "login.html";
		},
		error: function(responseData) {
			console.info(responseData);
			alert("注册失败")
		}
	});
}