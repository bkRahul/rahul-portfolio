// nav menu script

$('#nav-menu').ready(function() {
		$('a[href*=#]').bind('click', function(e) {

				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 500 );

				return false;
		});
});


$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

				//height from top till div 
				var divdist = $('#personal-projects').offset().top-250;

				//total height of div
				var divdistheight = $('#personal-projects').outerHeight(true);

				// total height of div and scroll screen
				var tot = divdist+divdistheight-250;

				if (scrollDistance >= divdist && scrollDistance <= tot) {
					console.log('white');
					$('.nav-container li .dot-label').addClass('white');
				}else {
					$('.nav-container li .dot-label').removeClass('white');
				}

}).scroll();



$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		//Show/hide menu on scroll
		if (scrollDistance >= 300) {
				$('#nav-menu').addClass('active');
		} else {
				$('#nav-menu').removeClass('active');
		}
	
		// Assign active class to nav links while scolling
		$('.section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('#nav-menu a.active').removeClass('active');
						$('#nav-menu a').eq(i).addClass('active');
				}
		});
}).scroll();


// Acc
$(document).on("click", ".accordion-section .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is(".active")) {
		$(".accordion-section .menu div").removeClass("active");
		$(".accordion-section ul li").removeClass("active");

		$(this).addClass("active");
		$(".accordion-section ul").find("li:eq(" + numberIndex + ")").addClass("active");

	}
});

//theme change

const toggleSwitch = document.getElementsByClassName('colorme');

var count = 0;

let colors = ['dark', 'light', 'one', 'two', 'three', 'four'];

function switchTheme(e) {

	e.preventDefault();

   document.documentElement.setAttribute('data-theme', colors[count]);

	count += 1;

	//reset the counter
	if (count>=colors.length) {
		count=0;
	}
console.log('clicked');
}

for (i = 0; i < toggleSwitch.length; i++) {
	toggleSwitch[i].addEventListener('click', switchTheme, false);
}

//Hamburger menu

$(document).ready(function(){

	revealSections();

	$('#burger-menu').click(function(){
		$(this).toggleClass('open');
		$('.mobile_menu').toggleClass('menu_activated');
		$('body').toggleClass( 'no-scroll' );	
	});

	$('.menu__group a').click(function(){
		$('#burger-menu').toggleClass('open');
		$('.mobile_menu').toggleClass('menu_activated');
		$('body').toggleClass( 'no-scroll' );			
	});


function revealSections() {

	var posts = $('section:not(.reveal)');
	var i = 0;
	setInterval(function() {
		if( i >= posts.length) return false;
		var el = posts[i];
		$(el).addClass('reveal');
		i++;
	}, 500);
}

});