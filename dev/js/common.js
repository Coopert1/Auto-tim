$(function(){

	//open main menu only main page and show/hide menu
	function displayCatalog() {

		if (window.location.pathname== '/taras/autotim/app/index.html' || window.location.pathname== '/index.html'){
			var browserMinWidth =  window.innerWidth;
			if (browserMinWidth >= 1215 && !($('.main-menu').hasClass('fixed'))) {
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
			if (width<1215){
				if(scrolTop>=123){
					$('body').addClass("scroll_padding-top")
					$(".main-menu").addClass("fixed");
				} else {
						$(".main-menu").removeClass("fixed");
						$('body').removeClass("scroll_padding-top")
					}
			}
			else {

				if(window.location.pathname== '/taras/autotim/app/index.html' || window.location.pathname== '/index.html'){
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
		if(window.location.pathname== '/taras/autotim/app/index.html' || window.location.pathname== '/index.html'){
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
		if(($(self).hasClass('open'))){
			//document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
			$("body").addClass("no-scroll");
		}else{
			//document.body.style.position = 'fixed';
			//document.body.style.top = -scrollTop + 'px';
			$("body").removeClass("no-scroll");
		}
		console.log($(self).hasClass('open'));
		
	}
	$('.main-menu .catalog-list').click(function(e){
		var browserMinWidth = $(window).width();
			$(this).toggleClass('open');
		if (browserMinWidth < 800 ) {
			// disableScroll()
			$('body').toggleClass('no-scroll')
			$('.backdrop').toggleClass('on');
			$('.bars').toggleClass('active');
		}
	});
	//prevent hide menu onclick
	$('.main-menu .catalog-list>ul').click(function(e){
		e.stopPropagation();
	});
	
	
	$('.search-mobile').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active_search');
		$(".search-form").animate(
			{height: 'toggle'},
			{duration:300},
		);
	})
	// hide menu when click another place
	$("body").click(function(e){
		var elem = $(".main-menu .catalog-list");
		if(window.location.pathname== '/taras/autotim/app/index.html' || window.location.pathname== '/index.html'){
			if($(".main-menu").hasClass("fixed")){
				if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.removeClass('open');
			}
		}
		else{
			if (!elem.is(e.target) && elem.has(e.target).length === 0) elem.removeClass('open');
		}
	});

	
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
	
	//disable scroll
	document.ontouchmove = function ( event ) {

		var isTouchMoveAllowed = true, target = event.target;

		while ( target !== null ) {
			if ( target.classList && target.classList.contains( 'disable-scrolling' ) ) {
				isTouchMoveAllowed = false;
				break;
			}
			target = target.parentNode;
		}

		if ( !isTouchMoveAllowed ) {
			event.preventDefault();
		}

	};
	function removeIOSRubberEffect( element ) {

		element.addEventListener( "touchstart", function () {

			var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;

			if ( top === 0 ) {
				element.scrollTop = 1;
			} else if ( currentScroll === totalScroll ) {
				element.scrollTop = top - 1;
			}

		} );

	}

	// removeIOSRubberEffect( document.querySelector( ".scrollable" ) );
	


});
