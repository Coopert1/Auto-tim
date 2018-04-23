$(function(){
	promSlider();
	SameHeight();
	$('.menu-list').click(function(){
		var browserMinWidth = $(window).width();
		if (browserMinWidth < 800) {
			$(this).toggleClass('open');
			$('.backdrop').toggleClass('on');
			$('.bars').toggleClass('active');
			$(".main-menu ul li ul").animate(
				{height: 'toggle'},
				{duration:300},
			);
		}
	})
	$('.search-mobile').click(function(){
		$(this).toggleClass('active_search');
		$(".search-form").fadeToggle(
			// {height: 'toggle'},
			// {duration:100},
		);
	})
	var product_slider_1=$('#product-slider-1').lightSlider({
		item: 4,
		controls:false,
		slideMove:4,
		slideMargin: -2,
		responsive:[
			{
				breakpoint: 1200,
				settings:{
					item:3,
					slideMove:3,
				}
			},
		],
	});
	var product_slider_2=$('#product-slider-2').lightSlider({
		item: 4,
		controls:false,
		slideMove:4,
		slideMargin: -2,
		responsive:[
			{
				breakpoint: 1200,
				settings:{
					item:3,
					slideMove:3,
				}
			},
			
		],
	});
	$(".ls-prevSlide").click(function(){
		product_slider_1.goToPrevSlide();
	});
	$(".ls-nextSlide").click(function(){
		product_slider_1.goToNextSlide();
	});
	$(".ls-prevSlide2").click(function(){
		product_slider_2.goToPrevSlide();
	});
	$(".ls-nextSlide2").click(function(){
		product_slider_2.goToNextSlide();
	});
	

	//Slider for popular parts


	var slider=$('#popular-section-slider').lightSlider({
		galleryMargin: 25,
		item: 3,
		controls: false,
		slideMove: 1,
		responsive:[
			{
				breakpoint: 500,
				settings:
					{
						item:1,
						slideMove:1,
					}
			},
		],
	});


	//Slider for dealers


	var dealerslider=$('#dealerslider').lightSlider({
		galleryMargin: 25,
		item: 5,
		slideMove:1,
		controls:false,
		responsive:[
			{
				breakpoint: 900,
				settings:
					{
						item:4,
						slideMove:1,
					}
			},
			{
				breakpoint: 800,
				settings:
					{
						item:4,
						slideMove:1,
					}
			},
			
		],
	});
	$(".icon_controls_prev").click(function(){
		dealerslider.goToPrevSlide();
	});
	$(".icon_controls_next").click(function(){
		dealerslider.goToNextSlide();
	});


	// Main Slider (promo)


	var promoslider=$('#promoslider').lightSlider({
		galleryMargin: 25,
		item: 1,
		slideMove:1,
		pager: false,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////

		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
	});
	
	
	function promSlider(){
		var browserMinWidth = $(window).width();
		if (browserMinWidth >= 800) {
			var wrapperWidth=$('#wrap-width').width()-274;
				$('.col-tablet-4-5').css('width', wrapperWidth+'px');
				$('.dealers-slider').css('width', wrapperWidth+'px');
			} else {
				$('.col-tablet-4-5').css('width', '100%');
				$('.dealers-slider').css('width', '100%');
			}
		
	}
	
	
	function SameHeight() {
			var browserMinWidth = $(window).width()
			if (browserMinWidth >= 800) {
				$('body > div.main-menu > div > ul > li.menu-list.add-border > ul').css('height', $('.promo').height()+8+'px');
				$('menu-list').click(function(event) {
					event.preventDefault();
				});
			} 
		}
	
	$(window).resize(function(){
		SameHeight();
		promSlider();
		
	});
});