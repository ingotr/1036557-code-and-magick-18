'use strict';

(function () {
  var WIZARD_NUMBER = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = {
    render: function (data) {
      var takeNumber = data.length > WIZARD_NUMBER ? WIZARD_NUMBER : data.length;
      similarList.innerHTML = '';
      for (var i = 0; i < takeNumber; i++) {
        similarList.appendChild(renderWizard(data[i]));
      }

      similar.classList.remove('hidden');
    },
  };
})();
