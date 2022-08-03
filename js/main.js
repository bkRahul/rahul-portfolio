import $ from 'jquery';

$(document).ready(function () {
  // nav menu script

  $('#nav-menu').ready(function () {
    $('a[href*="#"]').bind('click', function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr('href'); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          500
        );

      return false;
    });
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();

      //height from top till div
      var divdist = $('#personal-projects').offset().top - 250;

      //total height of div
      var divdistheight = $('#personal-projects').outerHeight(true);

      // total height of div and scroll screen
      var tot = divdist + divdistheight - 250;

      if (scrollDistance >= divdist && scrollDistance <= tot) {
        revealSections();
        $('.nav-container li .dot-label').addClass('white');
      } else {
        $('.nav-container li .dot-label').removeClass('white');
      }
    })
    .scroll();

  $(window)
    .scroll(function (event) {
      var divider = $('.divider');
      divider.each(function (i, el) {
        var el = $(el);
        if (isVisible(el)) {
          el.addClass('line');
        } else {
          el.removeClass('line');
        }
      });

      var scrollDistance = $(window).scrollTop();

      //Show/hide menu on scroll
      if (scrollDistance >= 300) {
        $('#nav-menu').addClass('active');
      } else {
        $('#nav-menu').removeClass('active');
      }

      // Assign active class to nav links while scolling
      $('.section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $('#nav-menu a.active').removeClass('active');
          $('#nav-menu a').eq(i).addClass('active');
        }
      });
    })
    .scroll();

  // Accordion

  $(document).on('click', '.accordion-section .menu div', function () {
    var numberIndex = $(this).index();

    if (!$(this).is('.active')) {
      $('.accordion-section .menu div').removeClass('active');
      $('.accordion-section ul li').removeClass('active');

      $(this).addClass('active');
      $('.accordion-section ul')
        .find('li:eq(' + numberIndex + ')')
        .addClass('active');
    }
  });

  //theme change

  const toggleSwitch = document.getElementsByClassName('colorme');

  var count = 0;

  let colors = ['dark', 'light', 'one', 'two', 'three', 'four'];

  function switchTheme(e) {
    e.preventDefault();

    document.documentElement.setAttribute('data-theme', colors[count]);
    localStorage.setItem('theme', colors[count]); //add this to storage
    count += 1;

    //reset the counter
    if (count >= colors.length) {
      count = 0;
    }
  }

  for (var i = 0; i < toggleSwitch.length; i++) {
    toggleSwitch[i].addEventListener('click', switchTheme, false);
  }

  //save to local storage

  const currentTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : null;

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  //Hamburger menu

  $('#burger-menu').click(function () {
    $(this).toggleClass('open');
    $('.mobile_menu').toggleClass('menu_activated');
    $('body').toggleClass('no-scroll');
  });

  $('.menu__group a').click(function () {
    $('#burger-menu').toggleClass('open');
    $('.mobile_menu').toggleClass('menu_activated');
    $('body').toggleClass('no-scroll');
  });

  //reveal function
  function revealSections() {
    var posts = $('.grid-item:not(.reveal)');
    var i = 0;
    setInterval(function () {
      if (i >= posts.length) return false;
      var el = posts[i];
      $(el).addClass('reveal');
      i++;
    }, 300);
  }

  function isVisible(element) {
    var scroll_pos = $(window).scrollTop();
    var window_height = $(window).height();
    var el_top = $(element).offset().top;
    var el_height = $(element).height();
    var el_bottom = el_top + el_height;
    return (
      el_bottom - el_height * 0.25 > scroll_pos &&
      el_top < scroll_pos + 0.5 * window_height
    );
  }

  //fixed navbar
  var c,
    currentScrollTop = 0,
    navbar = $('.mobile_menu');

  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass('scrollUp');
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass('scrollUp');
    }
    c = currentScrollTop;
  });
});
