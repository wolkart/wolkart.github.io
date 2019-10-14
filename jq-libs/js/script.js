"use strict";
if ($('.js-slider').length > 0 ) { // Проверяем наличие слайдера на странице
		$('.js-slider').slick({ 
			centerMode: false, 
			centerPadding: '0',
			slidesToShow: 3,
			variableWidth: true,
			dots: false,
			// infinite: false,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						centerMode: false,
						centerPadding: '0',
						slidesToShow: 2,
						variableWidth: true,
					}
				},
				{
					breakpoint: 768,
					settings: {
						centerMode: false,
						centerPadding: '0',
						slidesToShow: 1,
						variableWidth: true,
					}
				}
			]
		});
}
