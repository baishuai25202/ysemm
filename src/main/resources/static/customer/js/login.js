! function() {
	var layer = layui.layer,
		form = layui.form,
		carousel = layui.carousel;

	// 背景图片轮播
	carousel.render({
		elem: '#login_carousel',
		width: '100%',
		height: '100%',
		interval: 3000,
		arrow: 'none',
		anim: 'fade',
		indicator: 'none'
	});

	// 自定义验证规则
	form.verify({
		account: function(value) {
			var regPhone = /^1[34578]\d{9}$/;
			if(!regPhone.test(value.trim())) {
				return "请输入正确的手机号";
			}
		},

	});
}();