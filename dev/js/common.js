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
	fixMenuBar();
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
	function fixMenuBar(){
		var scrolTop = $(window).scrollTop();
		var width = $(window).width();
			if (width<1150){
				if(scrolTop>=123){
					$('body').addClass("scroll_padding-top")
					$(".main-menu").addClass("fixed");
				} else {
						$(".main-menu").removeClass("fixed");
						$('body').removeClass("scroll_padding-top")
					}
			}
			else {
				if(window.location.pathname== '/index.html'){
					//show-hide menu
					if(scrolTop>=645 && scrolTop<=860){
						$('.main-menu .catalog-list').removeClass('open')
					}
					else if(scrolTop<645) {
						$('.main-menu .catalog-list').addClass('open')
					}

					//fix menu
					if(scrolTop>=645){
						$('body').addClass("scroll_padding-top");
						$(".main-menu").addClass("fixed");
					}
					else{
						$('body').removeClass("scroll_padding-top")
						$(".main-menu").removeClass("fixed");
					}
				//if we are not on index.html
				}else{
					if(scrolTop>=136){
						$('body').addClass("scroll_padding-top");
						$(".main-menu").addClass("fixed");
					}
					else{
						$('body').removeClass("scroll_padding-top")
						$(".main-menu").removeClass("fixed");
					}
				}

				
			}

	};
	$(window).scroll(function(){
		fixMenuBar();
		
	});
	// end scroll fixes top main-menu
	
	//prevent click main page on laptop
	$('.catalog-list').click(function(e){
		var scrolTop = $(window).scrollTop();
		var width = window.innerWidth;
		if (window.location.pathname== '/index.html') {
			if(width>=1150 && scrolTop<645) {
				e.stopImmediatePropagation();
			}else return
		}else return
			
		
	})
	
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

	$('span.icon.icon_filter').click(function(){
		$(this).toggleClass('icon_filter_active');
		})

	$('.commodity__favorite').click(function(){
		$(this).toggleClass('active');
		})
	
	
	function noScrollBody(self){
		var scrollTop = $(window).scrollTop();
		if(!($(self).hasClass('open'))){
			//document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
			$("body").removeClass("no-scroll");
		}else{
			//document.body.style.position = 'fixed';
			//document.body.style.top = -scrollTop + 'px';
			//$("body").addClass("no-scroll");
		}
		console.log($(self).hasClass('open'));
		
	}
	$('.main-menu .catalog-list').click(function(e){
		var browserMinWidth = $(window).width();
			$(this).toggleClass('open');
		if (browserMinWidth < 800 ) {
			
			noScrollBody(this);
			$('.backdrop').toggleClass('on');
			$('.bars').toggleClass('active');
		}
	});
	//prevent hide menu onclick
	$('.main-menu .catalog-list>ul').click(function(e){
		e.stopPropagation();
	});
	// hide menu when click another place
	$("body").click(function(e){
		var elem = $(".main-menu .catalog-list");
		if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.removeClass('open');

	});
	
	
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
//	$(".commodity__thumbnails img").click(function(){
//		var sourse =  $(this).attr('src');
//		$(".commodity__img img").attr( 'src', sourse);
//	});
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
	
	$(document).on("touchmove",function(e){
    e.preventDefault();
});
	
	
	
});
