	$(function(){
	//wrap in slider elemets
		//product slider setting
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
	
		//Slider for popular parts setting
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
						item:1.5,
						slideMove:1,
					}
			},
		],
	});

		//Slider for dealers setting
			var dealerslider=$('#dealerslider').lightSlider({
			galleryMargin: 25,
			autoWidth: true,
			item: 5,
			slideMargin: 30,
			slideMove:1,
			controls:false,
			responsive:[
				{
					breakpoint: 900,
					settings:
						{
							item:4,
							autoWidth: true,
							slideMove:1,
						}
				},
				{
					breakpoint: 800,
					settings:
						{
							item:1.5,
							autoWidth: true,
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


		//Main Slider (promo) setting
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
		//product_card slider
		$('#lightSlider_product_card').lightSlider({
			controls: false,
			gallery: true,
			item: 1,
			loop:true,
			slideMargin: 0,
			galleryMargin: 80,
			thumbItem: 4,
			responsive:[
			{breakpoint: 1024,
				settings:{
					galleryMargin: 100,
				}
			},
			{breakpoint: 900,
				settings:{
					galleryMargin:50,
				}
			},
			{
			breakpoint: 799,
				settings:{
					galleryMargin: 0,
				}
			},
			
		]
		});
});
	// end wrap in slider elemets