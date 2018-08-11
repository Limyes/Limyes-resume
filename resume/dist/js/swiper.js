'use strict';

// 初始化swiper
!function () {
	var view = document.querySelector('.swiper-container');
	var controller = {
		view: null,
		swiper: null,
		swiperOptions: {
			autoplay: true,
			effect: 'fade',
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		},
		init: function init(view) {
			this.view = view;
			this.initSwiper();
		},
		initSwiper: function initSwiper() {
			this.swiper = new Swiper(view, this.swiperOptions);
		}
	};
	controller.init(view);
}.call();