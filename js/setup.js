'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

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

var getRandomElement = function (arr) {
  return arr[Math.round((Math.random() * (arr.length - 1)))];
};

var getRandomWizardName = function () {
  return getRandomElement(WIZARD_NAMES) +
    ' ' + getRandomElement(WIZAR_SURNAMES);
};

var wizards = [
  {
    name: getRandomWizardName(),
    coatColor: getRandomElement(COAT_COLORS),
    eyeColor: getRandomElement(EYE_COLORS)
  },
  {
    name: getRandomWizardName(),
    coatColor: getRandomElement(COAT_COLORS),
    eyeColor: getRandomElement(EYE_COLORS)
  },
  {
    name: getRandomWizardName(),
    coatColor: getRandomElement(COAT_COLORS),
    eyeColor: getRandomElement(EYE_COLORS)
  },
  {
    name: getRandomWizardName(),
    coatColor: getRandomElement(COAT_COLORS),
    eyeColor: getRandomElement(EYE_COLORS)
  }
];

var renderWizard = function (i) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyeColor;

  return wizardElement;
};

var renderFragment = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(i, wizards[i]));
  }

  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

renderFragment();

