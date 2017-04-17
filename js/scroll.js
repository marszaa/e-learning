$(".navbar a, footer a, .module-link").on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function () {
      window.location.hash = hash;
    });
  } else {
    $("html, body").animate({ scrollTop: 0 }, 900);
  }
});