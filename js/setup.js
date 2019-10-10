'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBER = 4;
  var HIDDEN_ELEMENT_NUMBER = 0;


  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var setupHiddenCoatColor = document.getElementsByName('coat-color');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var setupHiddenEyesColor = document.getElementsByName('eyes-color');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupHiddenFireballColor = document.getElementsByName('fireball-color');

  var getRandomElement = function (arr) {
    return arr[Math.round((Math.random() * (arr.length - 1)))];
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  };

  var getRandomElementColor = function (element, arrOfColors, hiddenElement) {
    element.style.fill = getRandomElement(arrOfColors);
    hiddenElement[HIDDEN_ELEMENT_NUMBER].value = element.style.fill;
  };

  var getRandomFireballColor = function () {
    var randomColor = getRandomElement(FIREBALL_COLORS);
    setupFireball.style.background = randomColor;
    setupHiddenFireballColor[HIDDEN_ELEMENT_NUMBER].value = randomColor;
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

  // eslint-disable-next-line no-shadow
  var loadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(getRandomElement(wizards)));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '40px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  setupWizardCoat.addEventListener('click', function () {
    getRandomElementColor(setupWizardCoat, COAT_COLORS, setupHiddenCoatColor);
  });

  setupWizardEyes.addEventListener('click', function () {
    getRandomElementColor(setupWizardEyes, EYE_COLORS, setupHiddenEyesColor);
  });

  setupFireball.addEventListener('click', function () {
    getRandomFireballColor();
  });

  // renderMockData();
  window.load(loadHandler, errorHandler);
})();
