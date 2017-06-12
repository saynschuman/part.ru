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
		dots: true,
		autoplay: true,
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
		$('#filter-container').show();
	})

	$(document).mouseup(function (e){ 
		var div = $('.filter-container');
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.hide(); 
		}
		var loggedCont =  $('.logged-right-toggle');
		if (!loggedCont.is(e.target) 
		    && loggedCont.has(e.target).length === 0) { 
			loggedCont.hide(); 
		$('.logged-in').removeClass('box-sh');
		}
		var list = $('.table-chooser-detail table td .list');
		if (!list.is(e.target) 
		    && list.has(e.target).length === 0) { 
			list.hide(); 
		}
		var mask = $('#detail-popup');
		if (!mask.is(e.target) 
		    && mask.has(e.target).length === 0) { 
			$('.popup-wrapper').removeClass('active');
			$('.big-popup').removeClass('active');
			$('body').removeClass('no-scroll');		
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

    $( '.type-m-container-det' ).on( 'click', '.delete-tag', function() {
        $( this ).parent().remove();
    });    

    

    $('#input-search').focus(function(){
    	$('.autocomplete-block').show();
    })
    $('#input-search').blur(function(){
    	setTimeout(function(){
		  $('.autocomplete-block').hide();
		}, 200);
    })

    $('.logged-in').click(function(){
    	$('.logged-right-toggle').show();
    	$(this).addClass('box-sh');
    })

    $('.location').click(function(){
    	$('.choose-cities').show();	
    })
    $('.choose-cities li').click(function(){
    	setTimeout(function(){
		  $('.choose-cities').hide();
		}, 200);
    	$('.location').text($(this).text());
    })

	$( "#det" ).hover(
	  function() {
	    $( "#filter-container-detail").show();
	  }, function() {
	   	$( "#filter-container-detail").hide();
	  }
	);	

	$( "#filter-container-detail" ).hover(
	  function() {
	    $(this).show()
	  }, function() {
	   	$(this).hide()
	  }
	);

	$('#filter-choose-details-det').click(function(e){
		e.preventDefault();
		$('#filter-details-list-det').show();
	})

	$('.detail-detail').click(function(){
		setTimeout(function(){
		  $('#filter-details-list-det').hide();
		}, 100);
		var tt = $(this).text();
		$('#filter-choose-details-det').text(tt);
		$('#add-after-det').append( '<div class="type-m">' + tt + '<span class="delete-tag"></span><br></div>' );
		if ($('#add-after .type-m').length > 3 ) {
			var l = $('#add-after-det .type-m').length - 3;
			$('.more-container-det').html('<a href="" class="more">ещё (' + l +')</a>')
			$('.more').click(function(e){
				e.preventDefault();
				$('.type-m-container-det').addClass('show-more-tags');
				$(this).hide();
			})			
    	}
	})	

	$('.has-sublist').click(function(e){
		e.preventDefault();
		$(this).next().slideToggle(200);
		$(this).toggleClass('active');
	})

	$('.has-block').click(function(e){
		e.preventDefault();
		
	})

	$('.has-block').focus(function(){
		var blockId = $(this).attr('data-id');
		$('.letters-block-all-models').hide();
		$('div[data-label="' + blockId + '"]').show();
	})

	$('.open-car-list').click(function(e){
		e.preventDefault();
		$('.auto-parts').hide();
		$('.part').show();
		var model = $(this).attr('data-model');
		$("#" + model).focus();
	})

	// detail-page

	$('.table-chooser-detail table .tog').click(function(e){
		e.preventDefault();
		$(this).next().slideToggle(200);
	})

	$('.table-chooser-detail table td .list li').click(function(){
		$(this).parent().prev().text($(this).text());
		$('.table-chooser-detail table .list').hide();
	})

	$('.detail-slider').slick({
		fade: true,
	  	cssEase: 'linear',
	  	autoplay: true,
	  	dots: true,
	  	autoplaySpeed: 3000,
	  	prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>'
	})

	$('#clear').click(function(e){
		e.preventDefault();
		$('.table-chooser-detail').slideToggle(200);
	})

	$('.offers .nav-offers li').click(function(){
		$('.offers .nav-offers li').removeClass('active');
		$(this).addClass('active');
	})

	$('#close-modal').click(function(){
		$('.popup-wrapper').removeClass('active');
		$('.big-popup').removeClass('active');
		$('body').removeClass('no-scroll');
	})

	$('.show-popup').click(function(e){
		e.preventDefault();
		$('.popup-wrapper').addClass('active');
		$('.big-popup').addClass('active');
		$('body').scrollTop(0).addClass('no-scroll');
	})

	// спорный момент

	$('.offers .offers-table tr').click(function(){
		$('.popup-wrapper').removeClass('active');
		$('.big-popup').removeClass('active');
		$('body').removeClass('no-scroll');
	})

	$('.offers .offers-table tr').click(function(e){
		e.preventDefault();
		$('.popup-wrapper').addClass('active');
		$('.big-popup').addClass('active');
		$('body').scrollTop(0).addClass('no-scroll');
	})

	$('.all-offers .all-offers-table tr').click(function(){
		location.reload();
	})

	$('.question-q').click(function(e){
		e.preventDefault();
		var dataQuestion = $(this).attr('data-question');
		$('.right').removeClass('active');
		$('.right[data-id="' + dataQuestion + '"]').addClass('active');
	})

	// catalog-brands


	$('#recommended-slider').slick({
	  	cssEase: 'linear',
	  	autoplay: true,
	  	dots: true,
	  	autoplaySpeed: 3000,
	  	prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
		slidesToShow: 4,
		slidesToScroll: 2,
		margin: 16
	})

	$('.catalog-brands .brands .brand').click(function(){
		location.reload();
	})

	// catalog-items

	$('#lond-slider').slick({
	  	cssEase: 'linear',
	  	autoplay: false,
	  	dots: false,
	  	prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
		slidesToShow: 12,
		slidesToScroll: 6,
		margin: 16
	})

	$("#slider").slider({
	    min: 0,
	    max: 1000,
	    values: [120,640],
	    range: true,
	    stop: function(event, ui) {
	        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
	        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
	    },
	    slide: function(event, ui){
	        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
	        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
	    }
	});

	$('#toggle-left-item').click(function(){

	})


$('#toggle-left-item').click(function(e){
	e.preventDefault();
    	$('#toggle-left-item-inside').show();	
    })
$('#toggle-left-item-inside li').click(function(){
	setTimeout(function(){
	  $('#toggle-left-item-inside').hide();
	}, 100);
	$('#toggle-left-item').text($(this).text());
})

$('#editable-rate li').click(function(){
	$(this).toggleClass('yellow');
	$(this).toggleClass('white');
	$('#qu-st').text($('#editable-rate .yellow').length);
})

})(jQuery);