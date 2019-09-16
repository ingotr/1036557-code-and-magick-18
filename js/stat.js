'use strict';

var CLOUD_RADIUS = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 25;
var TEXT_HEIGHT = 20;

var BAR_GAP_RATIO = 2;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_TRANSLATE_X = 65;
var BAR_TRANSLATE_DX = 90;
var BAR_TRANSLATE_Y = 390;

var TIME_X = 310;
var TIME_TRANSLATE_X = -250;
var TIME_TRANSLATE_Y = -395;
var TIME_GAP_X_RATIO = 1;
var TIME_GAP_DX_RATIO = 3.6;
var TIME_GAP_DY_RATIO = 3.5;

var ROTATE_ANGLE = 90;
var TO_RADIANS = 180;
var TO_PERCENT = 100;

var renderCloud = function (ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.fillStyle = color;
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  if (arr.length === 0) {
    maxElement = 1;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }
  return maxElement;
};

var getRandomSaturation = function () {
  return Math.ceil(Math.random() * TO_PERCENT) + '%';
};

var renderTitle = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);
};

var renderColumns = function (ctx, i, players, times, maxTime) {
  if (players[i] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  }

  ctx.save();
  ctx.translate(BAR_TRANSLATE_X + (BAR_TRANSLATE_DX * i), BAR_TRANSLATE_Y);
  ctx.rotate((Math.PI / TO_RADIANS) * -ROTATE_ANGLE);
  ctx.fillRect(CLOUD_X + GAP * BAR_GAP_RATIO, CLOUD_Y + GAP * BAR_GAP_RATIO,
    (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH);
  ctx.save();
  ctx.rotate((Math.PI / TO_RADIANS) * ROTATE_ANGLE);
  ctx.translate(TIME_TRANSLATE_X, TIME_TRANSLATE_Y);
  ctx.fillStyle = '#000';

  ctx.fillText(Math.ceil(times[i]), TIME_X, (BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)) + GAP * TIME_GAP_DY_RATIO);
  ctx.restore();
  ctx.restore();
  ctx.fillStyle = '#000';
  ctx.fillText(players[i], CLOUD_X + (GAP * TIME_GAP_X_RATIO) + (GAP * TIME_GAP_DX_RATIO * i), CLOUD_HEIGHT - CLOUD_Y);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_RADIUS, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_RADIUS, CLOUD_COLOR);

  renderTitle(ctx);

  if (times.length > players.length) {
    times.splice(players.length + 1);
  }

  var players = [];
  var testTime = [];
  var maxTime = 0;
  console.log(testTime);
  console.log(maxTime);

  var playersReplacement = [];
  var timesReplacement = [];
  
  if (players.length > 0) {
    if (testTime.length === 0) {

      for (i = 0; i < players.length; i++) {
        timesReplacement[i] = 1;
      }
      maxTime = getMaxElement(timesReplacement);
      for (i = 0; i < players.length; i++) {
        renderColumns(ctx, i, players, timesReplacement, maxTime);
      }
    } else {
      maxTime = getMaxElement(testTime);
      for (var i = 0; i < players.length; i++) {
        renderColumns(ctx, i, players, testTime, maxTime);
      }
    }
  } else if (testTime.length === 0) {
    var defaultArrLength = 4;
    for (i = 0; i < defaultArrLength; i++) {
      playersReplacement[i] = 'Repl ' + i;
      timesReplacement[i] = 1;
    }
    maxTime = getMaxElement(timesReplacement);
    for (i = 0; i < players.length; i++) {
      renderColumns(ctx, i, playersReplacement, timesReplacement, maxTime);
    }
  } else {
    for (i = 0; i < times.length; i++) {
      playersReplacement[i] = 'Repl ' + i;
    }
    maxTime = getMaxElement(testTime);
    for (i = 0; i < players.length; i++) {
      renderColumns(ctx, i, playersReplacement, testTime, maxTime);
    }
  }

  // for (var i = 0; i < players.length; i++) {
  //   renderColumns(ctx, i, players, testTime, maxTime);
  // }
};
