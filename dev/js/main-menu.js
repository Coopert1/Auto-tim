$(function(){
	$('.menu-list').click(function(){
		$(this).toggleClass('active');
		$(".main-menu ul li ul").animate(
			{height: 'toggle'},
			{duration:300},
		);
	})
	$('.search-mobile').click(function(){
		$(this).toggleClass('active_search');
		$(".search-form").fadeToggle(
			// {height: 'toggle'},
			// {duration:100},
		);
	})
});