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
		item: 5,
		controls:false,
		slideMove:3,
		slideMargin: -1,
		responsive:[
			{
				breakpoint: 1100,
				settings:{
					item:4,
					slideMove:4,
				}
			},
			{
				breakpoint: 900,
				settings:{
					item:3,
					slideMove:3,
				}
			},
		],
	});
	var product_slider_2=$('#product-slider-2').lightSlider({
		item: 5,
		controls:false,
		slideMove:4,
		slideMargin: -1,
		responsive:[
			{
				breakpoint: 1100,
				settings:{
					item:4,
					slideMove:4,
				}
			},
			{
				breakpoint: 900,
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
				// $('.col-tablet-4-5').css('width', '100%');
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
	// this part for add products

	$('.icon_amount-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.icon_amount-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	// this part for slider products
	
	//this part for looking .commodity__img
	$(".commodity__thumbnails img").click(function(){
		var sourse =  $(this).attr('src');
		$(".commodity__img img").attr( 'src', sourse);
	});
	//end part for looking .commodity__img

	//range slider
	var inputRangeInsert = false;
	var maxRange = 100000;
	$('.range-slider').jRange({
		from:0,
		to: maxRange,
		step: 500,
		scale: [1000,5000],
		format: '%s',
		width: '100%',
		showLabels: true,
		isRange : true,
		onstatechange: function(e){
			if(!inputRangeInsert){
				$('.sliderValue').eq(0).val(e.split(',')[0]);
				$('.sliderValue').eq(1).val(e.split(',')[1])	
			};
			
		}
		}).jRange('setValue', '15000,60000');
	function setRangeFilter(){
		inputRangeInsert = true;
		var min = $('.sliderValue').eq(0).val();
		var max = $('.sliderValue').eq(1).val();
		console.log(min,max);
		if(max > maxRange){
			max = maxRange;
			$('.sliderValue').eq(1).val(maxRange);
		}
		$('.range-slider').jRange('setValue', min+","+max);
		inputRangeInsert = false;
		// 
	}
	$('.sliderValue').on('keyup', function(){
		var input = $(this).val();
		var patt =  new RegExp('^\\d+$');
		var res = patt.test(input);
		
		if(!res){
			console.log(res)
			$(this).val($(this).val().slice(0,-1))	
			return false;
		}
		setRangeFilter()
	})
	
	//show-hide filters

	$('#show-filter-mobile').click(function(){
		$(".filters").show();
	})
	$('.filters__close-btn').click(function(){
		$(".filters").hide();
	})
	$( ".select-brand, .select-model, .select-series" ).selectmenu({
  		width: 100 + '%',
	});
});