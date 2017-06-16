(function($) {



// contacts-page (map)

	//Местоположение: долгота, широта и коэффициент увеличения
	var latitude = 55.754700,
		longitude = 37.621384,
		map_zoom = 8;

	//Адрес до иконки с маркером
	var marker_url = '../img/map-marker.png';
		
	
	var	main_color = '#cbe6a3', //основной цвет
		saturation_value= -1, //насыщенность
		brightness_value= 1; //яркость

	//Стили для элементов на карте
	var style= [ 
		{
			//Насыщенность обозначений на карте
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//Скрываем обозначения станций метро, вокзалов, аэропортов и прочих транспортных узов на карте
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//Скрываем обозначение дорог на карте
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//Скрываем обозначение локальных дорог
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//Скрываем обозначение магистрали на карте
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "on"}
			] 
		},
		{
			//Скрываем дорожные обозначения на карте
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//Стили для разных элементов на карте
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
		
	//Создание точки на карте
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style
    }

    var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style
    }

    //Инициализация карты
	var map = new google.maps.Map(document.getElementById('contacts-map'), map_options);

	//Добавляем свой маркер местонахождения на карту (свою иконку)			
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	var marker_2 = new google.maps.Marker({
	  	position: new google.maps.LatLng(56.254337, 40.410045),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	var marker_3 = new google.maps.Marker({
	  	position: new google.maps.LatLng(56.354337, 36.210045),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	var marker_4 = new google.maps.Marker({
	  	position: new google.maps.LatLng(55.300037, 36.210045),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	var marker_5 = new google.maps.Marker({
	  	position: new google.maps.LatLng(55.300037, 39.810045),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});


})(jQuery);