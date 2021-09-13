// preloader
$(function() {
  setTimeout(function() {
    $("div").removeClass("blur");
    $("body").addClass("loaded");
  }, 1000);
})

// burger menu
$('.mobile div').on('click', function() {
  $('.mobile div').toggleClass('active');
  $('.mobile nav').toggleClass('open');
  $('.mobile nav ul').toggleClass('show');
});


document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
});
