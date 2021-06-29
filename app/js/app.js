import $ from 'jquery'
window.jQuery = $
window.$ = $

import Swiper from 'swiper/bundle';

let magnific = require('magnific-popup');


/**
 * downCount: Simple Countdown clock with offset
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */


(function ($) {

	$.fn.downCount = function (options, callback) {
		var settings = $.extend({
			date: null,
			offset: null
		}, options);

		// Throw error if date is not set
		if (!settings.date) {
			$.error('Date is not defined.');
		}

		// Throw error if date is set incorectly
		if (!Date.parse(settings.date)) {
			$.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
		}

		// Save container
		var container = this;

		/**
		 * Change client's local date to match offset timezone
		 * @return {Object} Fixed Date object.
		 */
		var currentDate = function () {
			// get client's current date
			var date = new Date();

			// turn date to utc
			var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

			// set new Date object
			var new_date = new Date(utc + (3600000 * settings.offset))

			return new_date;
		};

		/**
		 * Main downCount function that calculates everything
		 */
		function countdown() {
			var target_date = new Date(settings.date), // set target date
				current_date = currentDate(); // get fixed current date

			// difference of dates
			var difference = target_date - current_date;

			// if difference is negative than it's pass the target date
			if (difference < 0) {
				// stop timer
				clearInterval(interval);

				if (callback && typeof callback === 'function') callback();

				return;
			}

			// basic math variables
			var _second = 1000,
				_minute = _second * 60,
				_hour = _minute * 60,
				_day = _hour * 24;

			// calculate dates
			var days = Math.floor(difference / _day),
				hours = Math.floor((difference % _day) / _hour),
				minutes = Math.floor((difference % _hour) / _minute),
				seconds = Math.floor((difference % _minute) / _second);

			// fix dates so that it will show two digets
			days = (String(days).length >= 2) ? days : '0' + days;
			hours = (String(hours).length >= 2) ? hours : '0' + hours;
			minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
			seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

			// based on the date change the refrence wording
			var ref_days = (days === 1) ? 'день' : 'дней',
				ref_hours = (hours === 1) ? 'час' : 'часов',
				ref_minutes = (minutes === 1) ? 'минутa' : 'минут',
				ref_seconds = (seconds === 1) ? 'секундa' : 'секунды';

			// set to DOM
			container.find('.days').text(days);
			container.find('.hours').text(hours);
			container.find('.minutes').text(minutes);
			container.find('.seconds').text(seconds);

			container.find('.days-ref').text(ref_days);
			container.find('.hours-ref').text(ref_hours);
			container.find('.minutes-ref').text(ref_minutes);
			container.find('.seconds-ref').text(ref_seconds);
		};

		// start
		var interval = setInterval(countdown, 1000);
	};

})(jQuery);


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {


	//* Register
	function damaxRegister() {
		damaxToggleMenu();
	}
	damaxRegister();



	$(".input-tel input").attr("data-inputmask", "'mask': '+7 (9999) 99 99 99'");

	$('.input-tel input').inputmask();

	$(".input-tel input").attr("inputmode", "decimal");


	$('.input-tel input').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '+7');
	});

	$('.input-tel input').focusout(function () { $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '+7'); });

	$(".age-input").attr("data-inputmask", "'mask': '9{1,2}'");

	$('.age-input').inputmask();

	$(".age-input").attr("inputmode", "decimal");

	$('.age-input').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', 'Возраст ребенка, лет');
	});

	$('.age-input').focusout(function () { $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', 'Возраст ребенка, лет'); });



	const swiper = new Swiper(".holidays-swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 23,
			},
		},
	});

	const swiper2 = new Swiper(".summer-swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: false,
		navigation: {
			nextEl: ".swiper-mob-next",
			prevEl: ".swiper-mob-prev",
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 96,
			},
		},
	});


	const swiper3 = new Swiper(".review-swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".swiper-rev-next",
			prevEl: ".swiper-rev-prev",
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination3",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 10,

			},
		},
	});

	const swiper4 = new Swiper(".teachers-swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".swiper-tec-next",
			prevEl: ".swiper-tec-prev",
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination4",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 10,

			},
		},
	});


	function damaxToggleMenu() {
		$(".burger").click(function () {
			$(this).toggleClass("on");
			$(".header-menu").slideToggle();
			$(".header-menu").toggleClass("menu-active");
			$("body").toggleClass("menu_expand")
		});
	}



	$('.countdown').downCount({
		date: '06/25/2021 10:20:00',
		offset: +3
	}, function () {
	});


	$(".arrow-top").on("click", function () {
		$("html").animate({ scrollTop: 0 }, "slow");
	});


	$(".faq-title").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).siblings(".faq-content").slideUp(200);
		} else {
			$(".faq-title").removeClass("active");
			$(this).addClass("active");
			$(".faq-content").slideUp(200);
			$(this).siblings(".faq-content").slideDown(200);
		}
	});


	(function ($) {
		"use strict";

		$('.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top)
					}, 1000);
					return false;
				}
			}
		});


		$('.js-scroll-trigger').click(function () {
			if ($(window).width() < 768) {
				jQuery(".header-menu").slideUp();
				jQuery(".btn-menu").removeClass("on");
				$(".burger").removeClass("on");
				$("body").removeClass("menu_expand");
			}
		});

	})(jQuery);


	$('.popup-btn').magnificPopup({
		type: 'inline',
		duration: 400,
		removalDelay: 500,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});

	$('.close-popup').click(function (event) {
		event.preventDefault();
		$.magnificPopup.close();
	});


	$('.svg-image').each((i, e) => {
		var $img = $(e);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, (data) => {
			let $svg = $(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', `${imgClass}replaced-svg`);
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

})
