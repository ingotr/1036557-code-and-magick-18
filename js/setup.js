'use strict';

(function () {
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, window.errorHandler, URL_SAVE);
    evt.preventDefault();
  });

})();
