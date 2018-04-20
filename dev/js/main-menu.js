$(function(){
	$('.menu-list').click(function(){
		$(this).toggleClass('open');
		$('.backdrop').toggleClass('on');
		$('.bars').toggleClass('active');
		$(".main-menu ul li ul").animate(
			{height: 'toggle'},
			{duration:300},
		);
		// $('.backdrop').toggleClass('active');
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
		galleryMargin: 20,

//		responsive:[
//			{
//				breakpoint: 1200,
//				settings:{
//					item:4,
//					slideMove:4,
//				}
//			},
//		],
	});
	var product_slider_2=$('#product-slider-2').lightSlider({
		item: 5,
		controls:false,
		slideMove:5,

		responsive:[
			{
				breakpoint: 1200,
				settings:{
					item:4,
					slideMove:4,
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
});