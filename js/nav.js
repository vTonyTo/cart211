$('.main-nav ul li').hover(function() {
  $('.main-nav ul li').addClass('active');
  $(this).removeClass('active');
});

/*
const closeButton = document.querySelector('.ul-menu-close')
closeButton.addEventListener('click', function () {
  const el = document.querySelector('.ul-menu')
  el.style.bottom = '-150%'
})
*/
