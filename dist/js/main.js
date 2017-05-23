(function($) {
    
	$('header.header .top-header .log-reg li a').click(function(e){
		e.preventDefault();
	})
	$('#login-button').focus(function(){
		$('#header-login-form').show();
	})
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('#header-login-form');
		var div_2 = $('#login-button');
		if (!div_2.is(e.target) 
			&& !div.is(e.target) // если клик был не по нашему блоку
		    	&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});

	$('.slider').slick({
		fade: true,
	  	cssEase: 'linear',
	  	autoplay: true,
	  	dots: true,
	  	autoplaySpeed: 3000,
	  	prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>'
	})

})(jQuery);