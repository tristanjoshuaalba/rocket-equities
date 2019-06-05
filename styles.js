$('.carousel').carousel({interval: 1500})

var $item = $('.carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
	var $src = $(this).attr('src');
	var $color = $(this).attr('data-color');
	$(this).parent().css({
		'background-image' : 'url(' + $src + ')',
		'background-color' : $color
	});
	$(this).remove();
});

$(window).on('resize', function (){
	$wHeight = $(window).height();
	$item.height($wHeight);
});


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('body').scrollspy({target: ".navbar-item"})

// --------------------------



$(document).ready(function() {
   $("#myCarousel").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#myCarousel").swipeleft(function() {
      $(this).carousel('next');
   });
});

