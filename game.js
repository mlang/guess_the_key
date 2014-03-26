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
audio['yay'] = new Audio();
audio['yay'].src = 'sounds/' + 'Yayy' + '.mp3';
audio['nope'] = new Audio();
audio['nope'].src = 'sounds/' + 'Nope' + '.mp3';

$("body").keypress(function(event) {
  $("#code").html(event.which);

  if (audio[event.which]) {
    audio[event.which].play();
  } 
});

window.setTimeout(function () { audio['yay'].play(); }, 5000);

