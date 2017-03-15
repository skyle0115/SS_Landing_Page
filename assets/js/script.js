$(document).ready(function() {
    $(".banner-text").hide();
    $(".banner-text").fadeIn(1000, function() {
        $('.banner-img img').addClass('animated slideInUp');
    });
});

$(document).scroll(function() {
  var pos = $(document).scrollTop();
  var requirement = $('#requirement').offset().top;
  var utility1 = $('#utility1').offset().top;
  var utility2 = $('#utility2').offset().top;
  var utility3 = $('#utility3').offset().top;
  var utility4 = $('#utility4').offset().top;
  if (pos > requirement) {
    $('#utility1 img').addClass('animated fadeIn');
  }
  if (pos > utility1) {
    $('#utility2 img').addClass('animated fadeIn');
  }
  if (pos > utility2) {
    $('#utility3 img').addClass('animated fadeIn');
  }
  if (pos > utility3) {
    $('#utility4 img').addClass('animated fadeIn');
  }
  if (pos > utility4) {
    $('#utility5 img').addClass('animated fadeIn');
  }
});
