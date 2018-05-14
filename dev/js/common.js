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

	// function menuPosition(){
	// 	var scrollTop = $(window).scrollTop();
	// 	var topPosition = 182 - scrollTop;
	// 	if(scrollTop == 0) return 56;
	// 	if(topPosition<=0){
	// 		return 56
	// 	}else return topPosition;
	// }

	function menuSet(self){
		var browserWidth = window.innerWidth;
		var heightMenu = window.innerHeight - document.querySelector(".main-menu").getBoundingClientRect().bottom + "px";
		var menuPosition = document.querySelector(".main-menu").getBoundingClientRect().bottom;
		//console.log(document.querySelector(".main-menu").getBoundingClientRect().bottom);

		if (browserWidth < 800 ) {
			$('.main-menu .catalog-list>ul').css({
				"max-height": heightMenu,
				"position": "fixed",
				"top": menuPosition  +"px"
			});

		} else {
			$('.main-menu .catalog-list>ul').css({
				"max-height": "",
				"top": "",
				"position": ""
			});
		}

	}
 	var scrollPosition;
	$('.main-menu .catalog-list').click(function(e){
		var scrollTop = window.pageYOffset;
		var browserWidth = window.innerWidth;
		console.log(scrollTop);
		var self = this;
		if(window.location.pathname== host_pathname || window.location.pathname== '/index.html'){
			if(browserWidth>=1150 && scrollTop<645) {
				e.stopImmediatePropagation();
			}else{
				$(this).toggleClass('open');
				
				menuSet(self);
				if($(this).hasClass('open')){
					if(browserWidth<800){
						scrollPosition = disableScroll();
					}
					$('.bars').addClass('active');
				}
				else{
					if(browserWidth<800){
						enableScroll();
					}
					$('.bars').removeClass('active');
				}
			}
		}else{
			$(this).toggleClass('open');
				
				menuSet(self);
				if($(this).hasClass('open')){
					if(browserWidth<800){
						scrollPosition = disableScroll();
					}
					$('.bars').addClass('active');
				}
				else{
					if(browserWidth<800){
						enableScroll();
					}
					$('.bars').removeClass('active');
				}
		}

	});
	//prevent hide menu onclick
	$('.main-menu .catalog-list>ul').click(function(e){
		e.stopPropagation();

	});	
	
	function disableScroll() {
		 var scrollTop = window.pageYOffset;
			function setBodyPosition(){
				var topPosition = 182 - 56 - scrollTop;
				
				if(topPosition<=0){
					console.log(scrollTop)
					return 126
				}else return scrollTop;
			}
	    	 $('body').addClass('no-scroll');
	    	 $('.backdrop').addClass('on');
	    	 $('body').css("position","fixed");
	   		 $('body').css("top", -setBodyPosition() + 'px');
	   		 window.scrollTo(0,scrollTop || 0)
	   		 return scrollTop;
	}
	function enableScroll() {
			 $('body').removeClass('no-scroll');
			 $('body').css("position","");
			 $('.backdrop').removeClass('on');
			 $('body').css("top", "");
			 window.scrollTo(0,scrollPosition || 0)
	}

});
	
