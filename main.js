'use strict';

$('.tab-label').on('click', function(e) {
  $(this).next().slideToggle();
});
