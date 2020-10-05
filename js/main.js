
$(document).ready(function(){
	$('.slider__inner').slick({
	  	nextArrow: '<button class="slider__inner-btn slider__inner-btnprev"><img src="img/arrow-next.svg" alt=""></button>',
	  	prevArrow: '<button class="slider__inner-btn slider__inner-btnnext"><img src="img/arrow-prev.svg" alt=""></button>',
	  	slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
	   	responsive: [
	    	{
		      breakpoint: 1024,
		      settings: {
		      	arrows: false,
		      }
		    }
	  	]
	});
	$('.menu__mobile-btn').on('click', function(){
		$('.menu-mobile__list').toggleClass('menu-mobile__list--active')
	});
	$('.search__filter-year').styler();
	$('.search__filter-domain').styler();
	wow = new WOW(
	  {
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       true,       // default
	  live:         true        // default
	}
	)
	wow.init();
	
});
