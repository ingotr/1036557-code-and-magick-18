'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 25;
var GAP_COEFFICIENT = 4;
var FONT_GAP = 100;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT - TEXT_HEIGHT - GAP * GAP_COEFFICIENT;
var BAR_WIDTH = 40;

var BAR_TRANSLATE_DX = 75;
var BAR_TRANSLATE_DY = 400;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  if (arr.length === 0) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = 1;
    }
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }
  return maxElement;
};

var getRandomSaturation = function () {
  return Math.ceil(Math.random() * 100) + '%';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

  if (times.length > players.length) {
    times.splice(players.length + 1);
  }

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  // ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP * 3);

  ctx.save();
  ctx.translate(75, 400);
  ctx.rotate((Math.PI / 180) * -90);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2, 140, 50);
  // ctx.fillStyle = '#000';
  // bar height + 170
  ctx.save();

  // SIGN_TIME_TRANSLATE_DX = - 250
  // SIGN_TIME_TRANSLATE_DY = - 375 - CLOUD_Y
  ctx.rotate((Math.PI / 180) * 90);
  ctx.translate(-250, -375 - 20);
  ctx.fillStyle = '#000';
  // SIGN_TIME_DY = 140 - 55 = 95
  // aver height - GAP - 30 + DY (строка 64)
  // DY связывает изменение высоты колонки
  // DY = barHeight - (barHeight * times[i]) / maxTime;
  ctx.fillText('150', 320, 140 - GAP - 30 + (-10 + 10));
  ctx.restore();
  ctx.restore();

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + GAP * 1, CLOUD_HEIGHT - CLOUD_Y);


  ctx.save();
  ctx.translate(175, 450);
  ctx.rotate((Math.PI / 180) * -90);
  ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  ctx.fillRect(CLOUD_X + GAP * 2 * 2, CLOUD_Y + GAP * 2, 70, 50);
  // ctx.fillStyle = '#000';
  // bar height + 170
  ctx.save();

  // SIGN_TIME_TRANSLATE_DX = - 250
  // SIGN_TIME_TRANSLATE_DY = - 375 - CLOUD_Y
  ctx.rotate((Math.PI / 180) * 90);
  ctx.translate(-250, -375 - 20);
  ctx.fillStyle = '#000';
  // SIGN_TIME_DY = 140 - 55 = 95
  // aver height - GAP - 30 + DY (строка 64) + 50 (???)
  // DY связывает изменение высоты колонки
  // DY = barHeight - (barHeight * times[i]) / maxTime;
  ctx.fillText('70', 320, 70 - GAP - 30 + (-10 + 80 + 20));
  ctx.restore();
  ctx.restore();


  ctx.fillStyle = '#000';
  ctx.fillText('Иван', CLOUD_X + GAP * 1 * 5, CLOUD_HEIGHT - CLOUD_Y);

  ctx.save();
  ctx.translate(275, 450);
  ctx.rotate((Math.PI / 180) * -90);
  ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  ctx.fillRect(CLOUD_X + GAP * 2 * 2, CLOUD_Y + GAP * 2, 110, 50);
  // ctx.fillStyle = '#000';
  // bar height + 170
  ctx.save();

  // SIGN_TIME_TRANSLATE_DX = - 250
  // SIGN_TIME_TRANSLATE_DY = - 375 - CLOUD_Y
  ctx.rotate((Math.PI / 180) * 90);
  ctx.translate(-250, -375 - 20);
  ctx.fillStyle = '#000';
  // SIGN_TIME_DY = 140 - 55 = 95
  // aver height - GAP - 30 + DY (строка 64) + 50 (???)
  // DY связывает изменение высоты колонки
  // DY = barHeight - (barHeight * times[i]) / maxTime;
  ctx.fillText('110', 320, 110 - GAP - 30 + (-10 + 40 - 20));
  ctx.restore();
  ctx.restore();


  ctx.fillStyle = '#000';
  ctx.fillText('Лена', CLOUD_X + GAP * 1 * 9, CLOUD_HEIGHT - CLOUD_Y);

  // ctx.save();
  // ctx.translate(175, 450);
  // ctx.rotate((Math.PI / 180) * -90);
  // ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  // ctx.fillRect(CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2, 70, 50);
  // ctx.restore();

  // ctx.save();
  // ctx.translate(275, 450);
  // ctx.rotate((Math.PI / 180) * -90);
  // ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  // ctx.fillRect(CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2, 100, 50);
  // ctx.restore();

  // ctx.fillStyle = '#000';
  // ctx.fillText('Лена', CLOUD_X + GAP * 9, CLOUD_HEIGHT - CLOUD_Y);
  // ctx.fillText('100', CLOUD_X + GAP * 9, 140 - CLOUD_Y * 4);

  // ctx.save();
  // ctx.translate(375, 450);
  // ctx.rotate((Math.PI / 180) * -90);
  // ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  // ctx.fillRect(CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2, 40, 50);
  // ctx.restore();

  // ctx.fillStyle = '#000';
  // ctx.fillText('Кекс', CLOUD_X + GAP * 13, CLOUD_HEIGHT - CLOUD_Y);
  // ctx.fillText('40', CLOUD_X + GAP * 13, 140 - CLOUD_Y * 4);

  // for (var i = 0; i < players.length; i++) {
  //   ctx.fillStyle = '#000';
  //   ctx.fillText(players[i], CLOUD_X + GAP + (FONT_GAP * i),
  //       CLOUD_HEIGHT - (GAP / GAP_COEFFICIENT));
  //   ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + (FONT_GAP * i),
  //       CLOUD_Y + GAP * 3);
  //   if (players[i] === 'Вы') {
  //     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  //   } else {
  //     ctx.fillStyle = 'hsl(245,' + getRandomSaturation() + ', 50%)';
  //   }
  //   ctx.save();
  //   // ctx.scale(1, -1);
  //   ctx.fillRect(CLOUD_X + GAP + (FONT_GAP * i), GAP * GAP_COEFFICIENT,
  //       BAR_WIDTH, (barHeight * times[i]) / maxTime);
  //   ctx.restore();
  // }
};
