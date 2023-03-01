(function ($) {
		'use strict';
		let windowWidth = $(window).width();

		const handleNavigation = function () {
			if (windowWidth < 992) {
				$('#call-navigation').click(function () {
					if (!$('body').hasClass('is-navigation')) {
						$('body').addClass('is-navigation');
					} else {
						$('body').removeClass('is-navigation');
					}
				});

				$('#header-navigation_close, #header-overlay').click(function () {
					$('body').removeClass('is-navigation');
				});
			}
		};

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
						delay: 8000, disableOnInteraction: false,
					},
					pagination: {
						el: "#slider-hero .swiper-actions-pagination", clickable: true,
					},
					navigation: {
						nextEl: '#slider-hero .swiper-actions_next', prevEl: '#slider-hero .swiper-actions_prev',
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
						delay: 8000, disableOnInteraction: false,
					},
					pagination: {
						el: "#slider-feedback .swiper-actions-pagination", clickable: true,
					},
					navigation: {
						nextEl: '#slider-feedback .swiper-actions_next',
						prevEl: '#slider-feedback .swiper-actions_prev',
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
						},
						1199: {
							slidesPerView: 2.35,
						},
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
						delay: 8000, disableOnInteraction: false,
					},
					pagination: {
						el: "#slider-blogs #swiper-actions_mobile .swiper-actions-pagination", clickable: true,
					},
					navigation: {
						nextEl: '#slider-blogs #swiper-actions_mobile .swiper-actions_next',
						prevEl: '#slider-blogs #swiper-actions_mobile .swiper-actions_prev',
					},
					breakpoints: {
						320: {
							slidesPerView: 1.25,
						},
						768: {
							slidesPerView: 2.25,
						},
						1199: {
							slidesPerView: 3.25,
							pagination: {
								el: "#slider-blogs #swiper-actions_pc .swiper-actions-pagination", clickable: true,
							},
							navigation: {
								nextEl: '#slider-blogs #swiper-actions_pc .swiper-actions_next',
								prevEl: '#slider-blogs #swiper-actions_pc .swiper-actions_prev',
							},
						},
					},
				});
			}
		}

		const handleReturnTop = function () {
			const btnReturn = $('#btn-return');
			if (btnReturn.length) {
				const bodyHeight = $('body').height(), percent_20 = bodyHeight * 0.20;

				$(window).scroll(function () {
					if ($(document).scrollTop() > percent_20) {
						btnReturn.addClass('is-show');
					} else {
						btnReturn.removeClass('is-show');
					}
				});

				btnReturn.click(function (e) {
					e.stopPropagation();
					$("html").css("scroll-behavior", "unset");
					$(window).scroll(function (e) {
						if ($(document).scrollTop() == 0) {
							$("html").css("scroll-behavior", "smooth");
						}
					});
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			}
		}

		const handleFormSelect = function () {
			if ($('.form-item_select').length) {
				const selectItems = $('.form-item_select');

				selectItems.map((index, elm) => {
					const selectItem = $(elm);
					const selectItemParent = selectItem.closest('.form-item');
					const selectItemTarget = selectItemParent.find('.form-item_list').attr('data-id');

					selectItem.click(function () {
						if (selectItemParent.hasClass('show')) {
							selectItemParent.removeClass('show');
						} else {
							selectItemParent.addClass('show');
						}
					});

					selectItemParent.on('click', '.form-item_list--option', function () {
						let selectItemValue = $(this).html();
						$(selectItemTarget).val(selectItemValue);
						selectItem.find('.form-item_select--value').html(selectItemValue).addClass('is-value');

						selectItemParent.removeClass('show');
					})
				});
			}
		}

		$(function () {
			handleNavigation();
			handleSliderHero();
			handleSliderFeedback();
			handleSliderBlogs();
			handleReturnTop();
			handleFormSelect();

			$(window).resize(() => {
				windowWidth = $(window).width();
				handleNavigation();
				handleReturnTop();
			});

		});
	}
)(jQuery);
