var audio = {};
var map = { 
  13: "Eingabe",
  32: "Leerzeichen",
  33: "Ausrufezeichen",
  40: "RundeKlammerAuf",
  41: "RundeKlammerZu",
  42: "Stern",
  46: "PunktPunktPunkt",
  47: "Schraegstrich",
  58: "Doppelpunkt",
  59: "Strichpunkt",
  60: "Kleinerzeichen",
  62: "Groesserzeichen",
  63: "Fragezeichen",
  91: "EckigeKlammerAuf",
  92: "RueckwaertigerSchraegstrich",
  93: "EckigeKlammerZu",
  95: "Unterstrich",
  123: "GeschweifteKlammerAuf",
  124: "SenkrechteLinie",
  125: "GeschweifteKlammerZu",
  126: "Tilde",
};

for (var key in map) {
  audio[key] = new Audio();
  audio[key].src = 'sounds/' + map[key] + '.mp3';
}
var yay = new Audio();
yay.src = 'sounds/' + 'Yay' + '.mp3';
var nope = new Audio();
nope.src = 'sounds/' + 'Nope' + '.mp3';

var delay = 6000;
var delayDecrement = 100;
var minDelay = 1000;
var score = 0;

var pressed = function (event) {};

$("body").keypress(function(event) {
  $("#code").html(event.which);
  pressed(event);
});

function game_over() {
  $("#code").html('Game over, your score is ' + score.toString());
}

function one_round () {
  var keys = Object.keys(map);
  var key = keys[Math.floor(keys.length * Math.random())];
  audio[key].play();
  var timeout = window.setTimeout(function () {
    pressed = function (event) {};
    score = score - 1;
    nope.play();
    if (delay > minDelay) {
      window.setTimeout(one_round, 1500);
    } else {
      game_over();
    }
  }, delay);
  delay = delay - delayDecrement;
  pressed = function(event) {
    window.clearTimeout(timeout);
    if (event.which == key) {
      score = score + 1;
      yay.play();
    } else {
      score = score - 2;
      nope.play();
    }
    pressed = function (event) {};
    if (delay > minDelay) {
      window.setTimeout(one_round, 1500);
    } else {
      game_over();
    }
  };
}

