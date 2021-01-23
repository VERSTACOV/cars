$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	$.each($('.ibg'),function(index, val){
		if($(this).find('img').length>0){
		   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();



$(document).ready(function(){
	if($('.slider__body').length>0){
		$('.slider__body').slick({
			//autoplay: true,
			//infinite: false,
			dots:true,
			arrows:false,
			accessibility: false,
			slidesToShow:1,
			slidesToScroll:1,
			autoplaySpeed: 3000,
			centerMode: false,
			variableWidth: false,
			rows:1,
			slidesPerRow:1,
			adaptiveHeight: true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}
});