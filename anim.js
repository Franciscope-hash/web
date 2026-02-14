// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
{text: "J'ai besoin qu'on m'aime", time: 15},
{ text: "Mais personne ne comprend", time: 19 },
{ text: "Ce que j'espère et que j'attends", time: 23 },
{ text: "Qui pourrait me dire qui je suis?", time: 29 },
{ text: "Et j'ai bien peur", time: 35 },
{ text: "Toute ma vie d'être incompris", time: 38 },
{ text: "Car aujourd'hui je me sens mal aimé", time: 44 },

{ text: "Je suis le mal aimé", time: 55 },
{ text: "Les gens me connaissent", time: 60 },
{ text: "Tel que je veux me montrer", time: 65 },
{ text: "Mais ont-ils cherché à savoir", time: 70 },
{ text: "D'où me viennent mes joies?", time: 76 },
{ text: "Et pourquoi ce désespoir", time: 80 },
{ text: "Caché au fond de moi", time: 85 },

{ text: "Si les apparences", time: 95 },
{ text: "Sont quelquefois contre moi", time: 100 },
{ text: "Je ne suis pas ce que l'on croit", time: 106 },
{ text: "Contre l'aventure de chaque jour", time: 112 },
{ text: "J'échangerais demain la joie d'un seul amour", time: 120 },
{ text: "Mais je suis là comme avant mal aimé", time: 130 },
{ text: "Car je suis mal aimé", time: 138 },,
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);