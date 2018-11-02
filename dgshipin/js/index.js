var responseData = [{
	id: '0',
	videoresource: 'mi-zhangjie.mp4',
	image: 'zhangjie.jpg',
	title: '谜',
	actor: '张杰',
	follow: false
}, {
	id: '1',
	videoresource: 'zhejiushiguanlan-mabuli.mp4',
	image: 'zhejiushiguanlan.jpg',
	title: '这就是灌篮',
	actor: '马布里',
	follow: true
}, {
	id: '2',
	videoresource: 'xiaomifabuhui.mp4',
	image: 'xiaomifabuhui.jpg',
	title: '小米发布会',
	actor: '雷军',
	follow: true
}, {
	id: '3',
	videoresource: 'xihongshishoufu.mp4',
	image: 'xihongshishoufu.jpg',
	title: '西虹市首富',
	actor: '沈腾',
	follow: true
}];

//mui.ajax("url", {
//	data: {
//
//	},
//	type:'get',
//	dataType: 'json',
//	success:functin(data){
//		mui.toast("sucsess")
//		responseData=data
//	},
//	error:function(){
//		mui.toast("请求资源失败")
//	}
//})

var vm = new Vue({
	el: '#lists',
	data: {
		playid: '',
		items: responseData
	},
	methods: {
		play: function(id) {
			plus.webview.open('html/play.html?playid=' + id, 'play', {}, 'zoom-fade-out', 250);
		}
	}
})