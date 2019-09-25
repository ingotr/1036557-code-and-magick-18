'use strict';

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZAR_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var HIDDEN_ELEMENT_NUMBER = 0;


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var userNameInput = setup.querySelector('.setup-user-name');
var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var setupHiddenCoatColor = document.getElementsByName('coat-color');
var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var setupHiddenEyesColor = document.getElementsByName('eyes-color');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupHiddenFireballColor = document.getElementsByName('fireball-color');
var wizards = [];

var getRandomElement = function (arr) {
  return arr[Math.round((Math.random() * (arr.length - 1)))];
};

var getRandomWizardName = function () {
  return getRandomElement(WIZARD_NAMES) +
    ' ' + getRandomElement(WIZAR_SURNAMES);
};

var createRandomWizards = function (arr, numberOfWizards) {
  for (var i = 0; i < numberOfWizards; i++) {
    arr[i] = {
      name: getRandomWizardName(),
      coatColor: getRandomElement(COAT_COLORS),
      eyeColor: getRandomElement(EYE_COLORS)
    };
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var renderFragment = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
};

var renderMockData = function () {
  createRandomWizards(wizards, WIZARD_NUMBER);
  renderFragment();
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

setupWizardCoat.addEventListener('click', function () {
  getRandomElementColor(setupWizardCoat, COAT_COLORS, setupHiddenCoatColor);
});

setupWizardEyes.addEventListener('click', function () {
  getRandomElementColor(setupWizardEyes, EYE_COLORS, setupHiddenEyesColor);
});

setupFireball.addEventListener('click', function () {
  getRandomFireballColor();
});

renderMockData();

