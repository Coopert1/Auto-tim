	$(function(){
		var host_pathname = '/taras/autotim-dev/app/index.html';
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
			slideMargin:0,
			galleryMargin: 80,
			thumbItem: 6,
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
					thumbItem: 4
				}
			},
			
		]
		});

////////
// input-mask
	$('input[type="tel"]').inputmask('+7(999)999-99-99');
	
	//close modal window
	$(".fixed-overlay__modal .icon_remove-item").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	$(".fixed-overlay__modal input[type='submit']").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	//open modal window
	$("a.btn_callback").click(function(){
		$(".fixed-overlay.callback").addClass('active');
		
	});
	$(".sign-in").click(function(){
		$(".fixed-overlay.sing-in").addClass('active');
		
	});




//show-hide filters
	$('#show-filter-mobile').click(function(){
		$(".filters").addClass('filters_active');
		$('.backdrop').toggleClass('on');
		$('body').toggleClass('no-scroll');
	})
	$('.filters__close-btn').click(function(){
		$(".filters").removeClass('filters_active');
		$('.backdrop').toggleClass('on');
		$('body').toggleClass('no-scroll');
	})
	// end show-hide filters
	
	//select menu
	$( ".select-brand, .select-model, .select-series" ).selectmenu({
  		width: 100 + '%',
	});
	$( ".select-city" ).selectmenu({
		width: 100 + '%',
	});




	// sorting
		$('a.price').click(function(e){
			e.preventDefault();
			if($(this).children().hasClass('fa-caret-up')){
				$(this).children('i.fa.fa-caret-up').removeClass("fa-caret-up").addClass("fa-caret-down");
			}
			else{
				$(this).children('i.fa.fa-caret-down').removeClass("fa-caret-down").addClass("fa-caret-up");
			}
		});

		$('a.popular').click(function(e){
			e.preventDefault();
			if($(this).children().hasClass('fa-caret-up')){
				$(this).children('i.fa.fa-caret-up').removeClass("fa-caret-up").addClass("fa-caret-down");
			}
			else{
				$(this).children('i.fa.fa-caret-down').removeClass("fa-caret-down").addClass("fa-caret-up");
			}
		});

	//




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






// hide menu when click another place
	$("body").click(function(e){
		var elem = $(".main-menu .catalog-list");
		if(window.location.pathname== host_pathname || window.location.pathname== '/index.html'){
			if($(".main-menu").hasClass("fixed")){
				if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.removeClass('open');
			}
		}
		else{
			if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.removeClass('open');
		}
	});






	$('.search-mobile').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active_search');
		$(".search-form").animate(
			{height: 'toggle'},
			{duration:300},
		);
	})




$('.product__add-favorite').click(function(){
		$(this).toggleClass('active');
		})

	$('.product__add-filter').click(function(){
		$(this).toggleClass('active');
		})

	$('.commodity__favorite').click(function(){
		$(this).toggleClass('active');
		})
	$('.commodity__filter').click(function(){
		$(this).toggleClass('active');
		})



//prevent click main page on laptop
	// $('.catalog-list').click(function(e){
		// var scrolTop = $(window).scrollTop();
		// var width = window.innerWidth;
		// if(window.location.pathname== host_pathname || window.location.pathname== '/index.html'){
		// 	if(width>=1150 && scrolTop<645) {
		// 		e.stopImmediatePropagation();
		// 	}else return
		// }else return
			
		
	// })
	
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


















});
	// end wrap in slider elemets



	



