(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleSliderHero = function () {
		if ($('#slider-hero').length) {
			new Swiper('#slider-hero .swiper', {
				speed: 800,
				slidesPerView: 1,
				preloadImages: false,
				effect: 'fade',
				allowTouchMove: false,
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
				pagination: {
					el: "#slider-hero .swiper-actions-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: '#slider-hero .swiper-actions_next',
					prevEl: '#slider-hero .swiper-actions_prev',
				},
			});
		}
	}

	$(function () {
		handleSliderHero();

		$(window).resize(() => {
			windowWidth = $(window).width();
		});
	});
})(jQuery);
