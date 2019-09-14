'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 40;
var GAP_COEFFICIENT = 2;
var FONT_GAP = 100;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP * GAP_COEFFICIENT;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  if (arr.length == 0) {
    for(var i = 0; i < arr.length; i++) {
      arr[i] = 1;
    }
  } else {
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }
  return maxElement;
};

var getRandomSaturation = function() {
  var randomSaturation = 0.5;

  return randomSaturation;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * GAP_COEFFICIENT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

  var maxTime = getMaxElement([]);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (FONT_GAP * i),
    CLOUD_HEIGHT - (GAP / GAP_COEFFICIENT));
    if(players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else ctx.fillStyle = 'hsl(245, getRandomSaturation, 50%)';

    ctx.fillRect(CLOUD_X + GAP + (FONT_GAP * i), CLOUD_Y +
    GAP * GAP_COEFFICIENT, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }

};
