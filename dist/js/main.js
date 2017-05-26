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
	
	$('.pr-slider').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		dots: true
	});

	$('#category-search-button').click(function(e){
		e.preventDefault();
		$(this).addClass('btn-r');
		$('#category-search-list').show();
	})
	$('#category-search-button').blur(function(){
		setTimeout(function(){
		  $('#category-search-list').hide();
		}, 200);
	})

	$('#category-search-list li a').click(function(e){
		e.preventDefault();
	})
	$('#category-search-list li ul li a').click(function(){
		$('#input-search').val($(this).text());
		$('#input-search').focus();
	})
	$('#filter-choose-details').click(function(e){
		e.preventDefault();
		$('#filter-details-list').show();
	})

	$('.detail').click(function(){
		setTimeout(function(){
		  $('#filter-details-list').hide();
		}, 100);
		var tt = $(this).text();
		$('#filter-choose-details').text(tt);
		$('#add-after').append( '<div class="type-m">' + tt + '<span class="delete-tag"></span><br></div>' );
		if ($('#add-after .type-m').length > 3 ) {
			var l = $('#add-after .type-m').length - 3;
			$('.more-container').html('<a href="" class="more">ещё (' + l +')</a>')
			$('.more').click(function(e){
				e.preventDefault();
				$('.type-m-container').addClass('show-more-tags');
				$(this).hide();
			})			
    	}
	})

	$( '.type-m' ).on( 'click', function() {
	    $( this ).remove();
	});

	$('#show-filter-button').click(function(e){
		e.preventDefault();
		// $(this).addClass('btn-drk');
		$('.filter-container').show();
	})

	$(document).mouseup(function (e){ 
		var div = $('.filter-container');
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.hide(); 
		}
	});	

    $( '.type-m-container' ).on( 'click', '.delete-tag', function() {
        $( this ).parent().remove();
        if ($('#add-after .type-m').length > 3 ) {
			var l = $('#add-after .type-m').length - 3;
			$('.more-container').html('<a href="" class="more">ещё (' + l +')</a>')
    	}
        if ($('#add-after .type-m').length <= 3 ) {
			$('.more-container').html('')
			
    	}
    });

    $('#input-search').focus(function(){
    	$('.autocomplete-block').show();
    })
    $('#input-search').blur(function(){
    	setTimeout(function(){
		  $('.autocomplete-block').hide();
		}, 200);
    })
})(jQuery);