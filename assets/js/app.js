(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleSliderHero = function () {
		if ($('#slider-hero').length) {
			new Swiper('#slider-hero .swiper', {
				speed: 400,
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

	const handleSliderFeedback = function () {
		if ($('#slider-feedback').length) {
			new Swiper('#slider-feedback .swiper', {
				speed: 400,
				spaceBetween: 20,
				centeredSlides: true,
				slidesPerView: 2.35,
				preloadImages: false,
				effect: 'slide',
				allowTouchMove: false,
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
				pagination: {
					el: "#slider-feedback .swiper-actions-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: '#slider-feedback .swiper-actions_next',
					prevEl: '#slider-feedback .swiper-actions_prev',
				},
			});
		}
	}

	const handleSliderBlogs = function () {
		if ($('#slider-blogs').length) {
			new Swiper('#slider-blogs .swiper', {
				speed: 400,
				spaceBetween: 20,
				slidesPerView: 3.25,
				preloadImages: false,
				effect: 'slide',
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
				pagination: {
					el: "#slider-blogs .swiper-actions-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: '#slider-blogs .swiper-actions_next',
					prevEl: '#slider-blogs .swiper-actions_prev',
				},
			});
		}
	}


	$(function () {
		handleSliderHero();
		handleSliderFeedback();
		handleSliderBlogs();

		$(window).resize(() => {
			windowWidth = $(window).width();
		});
	});
})(jQuery);
