/******/ (function() { // webpackBootstrap
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var currentYearElements = document.querySelectorAll('[data-current-year]');
currentYearElements.forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

if ($('#lottie-scroll-1').length > 0) {
  LottieInteractivity.create({
    mode: 'scroll',
    player: '#lottie-scroll-1',
    //ID lottie-player в зеро-блоке и тут должны совпадать
    actions: [{
      visibility: [1, 1],
      // отступ от низа экрана, когда анимация на паузе
      type: 'stop',
      //Анимация на паузе
      frames: [0] //Количество кадров на паузе

    }, {
      visibility: [0.2, 0.6],
      type: 'seek',
      //Анимация проигрывается по скролу
      frames: [0, 125] // С какого по какой кадр будет проигрываться анимация

    }, {
      visibility: [0.6, 1.0],
      type: 'loop',
      //Анимация зациклена и проигрывает автоматически
      frames: [0, 125]
    }]
  });
}

$(document).ready(function () {
  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    speed: 2000
  });
});

if ($(window).width() <= 550) {
  $('.blog__list').slick({
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false
  });
}

$('.header-menu-head').click(function () {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});
$('.footer-form-input[name="phone"], .review-page-form__input[name="phone"]').mask('+7 (999) 999-99-99');
$('.footer-form-choose-label').click(function () {
  $('.footer-form-choose-label').removeClass('active');
  $(this).addClass('active');
});
$('.footer-form-select-head').click(function () {
  $(this).next().slideToggle();
});
$('.footer-form-select-option').click(function () {
  $('.footer-form-select-options').slideUp();
  $('.footer-form-select-head').addClass('active');
  $('.footer-form-select-head').html($(this).find('span').text());
});
$('.footer-form').on('submit', function (e) {
  e.preventDefault();
  var isValid = validateFooterForm(this);

  if (isValid) {
    var $form = $(this);
    $form.find('.footer-form-form').hide();
    $form.find('.footer-form-thx').show();
  }
});

function validateFooterForm(form) {
  var isValid = true;
  var $form = $(form);
  var $phone = $form.find('input[name=phone]');

  if ($phone.length > 0 && $phone.val() == '') {
    isValid = false;
    $phone.addClass('error').attr('placeholder', 'Введите номер');
  } else {
    $phone.removeClass('error').attr('placeholder', '+7(999)999-99-99');
  }

  var $name = $form.find('input[name=name]');

  if ($name.length > 0 && $name.val() == '') {
    isValid = false;
    $name.addClass('error').attr('placeholder', 'Введите имя');
  } else {
    $name.removeClass('error').attr('placeholder', 'Ваше имя');
  }

  var $email = $form.find('input[name=email]');

  if ($email.length > 0 && $email.val() == '') {
    isValid = false;
    $email.addClass('error').attr('placeholder', 'Введите email');
  } else {
    $email.removeClass('error').attr('placeholder', 'Ваш email');
  }

  var $message = $form.find('textarea[name=message]');

  if ($message.length > 0 && $message.val() == '') {
    isValid = false;
    $message.addClass('error').attr('placeholder', 'Введите сообщение');
  } else {
    $message.removeClass('error').attr('placeholder', 'Ваше сообщение');
  }

  var $contactFields = $form.find('input[name=contact]');

  if ($contactFields.length > 0 && $form.find('input[name=contact]:checked').length == 0) {
    isValid = false;
    $form.find('.footer-form-select').addClass('error');
  } else {
    $form.find('.footer-form-select').removeClass('error');
  }

  return isValid;
}

$('.reviews__item').click(function () {
  $('.reviews-slider').slick('slickGoTo', $(this).data('slide') - 1);
});
var wow = new WOW();
wow.init();

if ($('#typed').length > 0) {
  var typed = new Typed('#typed', {
    strings: ['Разрабатываем', 'Развиваем', 'Поддерживаем', 'Продвигаем'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    cursorBlinkSpeed: 1000
  });
} // Эффект блюра для блоков services__item


$(document).ready(function () {
  // Добавляем элемент блюра к каждому блоку services__item
  $('.services__item').each(function () {
    $(this).append('<div class="services-blur-effect"></div>');
  }); // Обработчик наведения на блоки services__item

  $('.services__item').on('mouseenter', function () {
    $(this).find('.services-blur-effect').css('opacity', '1');
  }).on('mousemove', function (e) {
    var $blur = $(this).find('.services-blur-effect');
    var rect = this.getBoundingClientRect(); // Позиционируем относительно блока

    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    $blur.css({
      left: x + 'px',
      top: y + 'px'
    });
  }).on('mouseleave', function () {
    $(this).find('.services-blur-effect').css('opacity', '0');
  });
});
$('[data-popup]').click(function () {
  var popup = $(this).data('popup');
  $(popup).addClass('active');
});
$('.close').click(function () {
  $('.popup').removeClass('active');
});
$('.popup__wrapper').click(function (e) {
  e.stopPropagation();

  if ($(e.target).hasClass('popup__wrapper')) {
    $('.popup').removeClass('active');
  }
});
$('.menu-bottom-burger').click(function () {
  $(this).toggleClass('active');
  $('.header-menu-list').slideToggle();
});
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('btn-menu-bottom_id');
  var header = document.getElementById('hero-block');
  if (!button || !header) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Header виден → кнопка скрыта
        button.classList.remove('visible');
      } else {
        // Header не виден → кнопка видна
        button.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });
  observer.observe(header);
});
document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.long__timeline');
  if (!timeline) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      timeline.classList.add('long__timeline--visible');
      observer.unobserve(timeline);
    });
  }, {
    threshold: 0.35
  });
  observer.observe(timeline);
});
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var footer = document.querySelector('.footer');
  var menuBottom = document.querySelector('.menu-bottom');
  if (!header || !footer) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var isFooterVisible = entry.isIntersecting;
      header.classList.toggle('header--hidden', isFooterVisible);

      if (menuBottom) {
        menuBottom.classList.toggle('menu-bottom--hidden', isFooterVisible);
      }
    });
  }, {
    threshold: 0.05
  });
  observer.observe(footer);
}); //слайдер с страницы шаблоны "

$(document).ready(function () {
  $('.articles-list').slick({
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.blog__left',
    nextArrow: '.blog__right',
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

function loadYandexMapScript(apiKey) {
  return new Promise(function (resolve, reject) {
    if (window.ymaps3) {
      resolve();
      return;
    }

    var script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/v3/?apikey=".concat(apiKey, "&lang=ru_RU");
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initContactsMap() {
  return _initContactsMap.apply(this, arguments);
}

function _initContactsMap() {
  _initContactsMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var mapElement, apiKey, center, zoom, _window$ymaps, YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer, YMapMarker, map, markerElement;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mapElement = document.getElementById('contacts-map');

            if (mapElement) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            apiKey = '188c5186-7f33-407e-9e78-e5a1bee54420';
            center = mapElement.dataset.center.split(',').map(Number);
            zoom = Number(mapElement.dataset.zoom) || 15;
            _context.next = 8;
            return loadYandexMapScript(apiKey);

          case 8:
            _context.next = 10;
            return window.ymaps3.ready;

          case 10:
            _window$ymaps = window.ymaps3, YMap = _window$ymaps.YMap, YMapDefaultFeaturesLayer = _window$ymaps.YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer = _window$ymaps.YMapDefaultSchemeLayer, YMapMarker = _window$ymaps.YMapMarker;
            map = new YMap(mapElement, {
              location: {
                center: center,
                zoom: zoom
              }
            });
            map.addChild(new YMapDefaultSchemeLayer());
            map.addChild(new YMapDefaultFeaturesLayer());
            markerElement = document.createElement('div');
            markerElement.className = 'contacts-map__marker';
            map.addChild(new YMapMarker({
              coordinates: center
            }, markerElement));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initContactsMap.apply(this, arguments);
}

initContactsMap();
/******/ })()
;