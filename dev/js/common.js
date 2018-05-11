$(function(){
	var host_pathname = '/taras/autotim-dev/app/index.html';
	//open main menu only main page and show/hide menu
	function displayCatalog() {

		if (window.location.pathname== host_pathname || window.location.pathname== '/index.html'){
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
		var browserWidth =  window.innerWidth;
		if(browserWidth >=800){
			displayCatalog();
		}
		
		dealersSlider();
		menuSet();
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

				if(window.location.pathname== host_pathname || window.location.pathname== '/index.html'){
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
	
	
	
	
	
	//іскщдд

	function menuPosition(self){
		var scrollTop = $(window).scrollTop();
		var topPosition = 182 - scrollTop;
		if(topPosition<=0){
			return 56
		}else return topPosition;
	}

	function menuSet(self){
		var browserWidth = window.innerWidth;
		var heightMenu = window.innerHeight - document.querySelector(".main-menu").getBoundingClientRect().bottom + "px";
		var scrollTop = $(window).scrollTop();
		if (browserWidth < 800 ) {
			$('.main-menu .catalog-list>ul').css({
				"max-height": heightMenu,
				"margin-top": menuPosition(self) +"px"
			});

		} else {
			$('.main-menu .catalog-list>ul').css({
				"max-height": "",
				"margin-top": ""
			});
		}
	}
 	var scrollPosition;
	$('.main-menu .catalog-list').click(function(e){
		var scrollTop = window.pageYOffset;
		$(this).toggleClass('open');
		var self = this;
		menuSet(self);
		if($(this).hasClass('open')){
			scrollPosition = disableScroll();
			$('.backdrop').addClass('on');
			$('.bars').addClass('active');
		}
		else{
			enableScroll();
			$('.backdrop').removeClass('on');
			$('.bars').removeClass('active');
		}
	});
	//prevent hide menu onclick
	$('.main-menu .catalog-list>ul').click(function(e){
		e.stopPropagation();
	});	
	// $('body').click(function(){
	// 	var scrollTop = window.pageYOffset;
	// 	 window.scrollTo(0,scrollTop)
	// });
	
	//disable scroll
	function disableScroll() {
		 var scrollTop = window.pageYOffset;
			function test(){
				var topPosition = 182 - scrollTop;
				console.log(scrollTop)
				if(topPosition<=0){
					return 126
				}else return scrollTop;
			}
	    	 $('body').addClass('no-scroll');
	    	 $('body').css("position","fixed");
	   		 $('body').css("top", -test() + 'px');
	   		 // console.log(scrollTop)
	   		 return scrollTop;
	}
	function enableScroll() {
			 $('body').removeClass('no-scroll');
			 $('body').css("position","");
			 $('body').css("top", "");
			 window.scrollTo(0,scrollPosition || 0)
	}

});
	
