'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZAR_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_NUMBER = 4;

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

var renderWizard = function (obj) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = obj.name;
  wizardElement.querySelector('.wizard-coat').style.fill = obj.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = obj.eyeColor;

  return wizardElement;
};

var renderFragment = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var showDomElements = function () {
  userDialog.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var renderMockData = function () {
  createRandomWizards(wizards, WIZARD_NUMBER);
  renderFragment();
};

renderMockData();
showDomElements();


