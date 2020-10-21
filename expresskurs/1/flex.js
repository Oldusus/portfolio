jQuery( document ).ready(function( $ ) {
  $('.trigger').on('click', function() {
     $('.ober').toggleClass('open_pe');
    $('.overlay').toggleClass('open_pe');
     return false;
  });
});