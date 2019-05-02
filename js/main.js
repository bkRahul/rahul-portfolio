// nav menu script

$('#nav-menu').ready(function() {
		$('a[href*=#]').bind('click', function(e) {

				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		//Show/hide menu on scroll
		if (scrollDistance >= 500) {
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
