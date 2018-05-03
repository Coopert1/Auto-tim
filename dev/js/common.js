$(function(){
	//open main menu only main page and show/hide menu
	function displayCatalog() {
		if (window.location.pathname== '/index.html') {
			var browserMinWidth =  window.innerWidth;
			if (browserMinWidth >= 1150) {
				$('.main-menu .catalog-list').addClass('open');
			}
			else {
				$('.main-menu .catalog-list').removeClass('open');
			}
		}
	}

	displayCatalog();
	//dealersSlider
	dealersSlider()
	function dealersSlider(){
		var browserMinWidth = $(window).width();
		if (browserMinWidth >= 800) {
			var wrapperWidth=$('#wrap-width').width()-274;
				$('.dealers-slider').css('width', wrapperWidth+'px');
			} else {
				$('.dealers-slider').css('width', '100%');
			}
		
	}
	//End dealersSlider
	
	$(window).resize(function(){
		displayCatalog();
		dealersSlider();
	});
	
	//scroll fixed top main-menu
	$(window).scroll(function(){
		var scrolTop = $(this).scrollTop();
		var width = $(window).width();
		if (width<800){
			if(scrolTop>=123){
				$('body').addClass("scroll_padding-top")
				//$(".col-promo").addClass("scroll_margin-top")
				$(".main-menu").addClass("fixed");
			} else {
				$('body').removeClass("scroll_padding-top")
				$(".main-menu").removeClass("fixed");
			}
		}else{
			if(scrolTop>=136){
				$('body').addClass("scroll_padding-top")
				//$(".col-promo").addClass("scroll_margin-top")
				$(".main-menu").addClass("fixed");
				if (window.location.pathname== '/index.html') {
					$('.main-menu .catalog-list').removeClass('open');
				}
			} else {
				$('body').removeClass("scroll_padding-top")
				//$(".col-promo").removeClass("scroll_margin-top")
				
				
				$(".main-menu").removeClass("fixed");
					if (window.location.pathname== '/index.html') {
						$('.main-menu .catalog-list').addClass('open');
					}
				}

		}
		
	});
	// end scroll fixes top main-menu
	
	// peculiar-properties row show/hide
	$('.peculiar-properties_all').click(function(e){
		e.preventDefault();
		var elem = $(this).siblings(".peculiar-properties");
		elem.toggleClass("all")
		if(elem.hasClass("all")){
			$(this).children().text("Свернуть")
		}else { $(this).children().text("Все особенности")}
		
	});
	
	// end peculiar-properties row show/hide
	
	
	$('span.icon.icon_fav').click(function(){
		$(this).toggleClass('icon_fav_active');
		})
	$('.commodity__favorite').click(function(){
		$(this).toggleClass('active');
		})
	
	$('.main-menu .catalog-list').click(function(){
		var browserMinWidth = $(window).width();
		
			$(this).toggleClass('open');
			
		if (browserMinWidth < 800) {
			$('.backdrop').toggleClass('on');
			$('.bars').toggleClass('active');
		}
	})
	
	
	$('.search-mobile').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active_search');
		$(".search-form").animate(
			{height: 'toggle'},
			{duration:300},
		);
	})
	
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
			autoWidth: false,
			item: 5,
			slideMargin: 10,
			slideMove:1,
			controls:false,
			responsive:[
				{
					breakpoint: 900,
					settings:
						{
							item:4,
							autoWidth: false,
							slideMove:1,
						}
				},
				{
					breakpoint: 800,
					settings:
						{
							item:1.5,
							autoWidth: false,
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
	
	// end wrap in slider elemets
	
	// this part for count
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
	// end part for count
	
	
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
	//end range slider
	
	//show-hide filters
	$('#show-filter-mobile').click(function(){
		$(".filters").addClass('filters_active');
		$('.backdrop').toggleClass('on');
	})
	$('.filters__close-btn').click(function(){
		$(".filters").removeClass('filters_active');
		$('.backdrop').toggleClass('on');
	})
	// end show-hide filters
	
	//select menu
	$( ".select-brand, .select-model, .select-series" ).selectmenu({
  		width: 100 + '%',
	});
	$( ".select-city" ).selectmenu({
		width: 100 + '%',
	});
	
	
	
});
