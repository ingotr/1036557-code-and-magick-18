'use strict';

(function () {
  var HIDDEN_ELEMENT_NUMBER = 0;
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function (_color) {},
    onCoatChange: function (_color) {},
  };
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var hiddenFireballColor = document.getElementsByName('fireball-color');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var getRandomElement = function (arr) {
    return arr[Math.round((Math.random() * (arr.length - 1)))];
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomElement(EYE_COLORS);
    wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    getRandomFireballColor();
  });

  var getRandomFireballColor = function () {
    var randomColor = getRandomElement(FIREBALL_COLORS);
    fireball.style.background = randomColor;
    hiddenFireballColor[HIDDEN_ELEMENT_NUMBER].value = randomColor;
  };

  // eslint-disable-next-line no-return-assign
  return window.wizard = wizard;
})();
