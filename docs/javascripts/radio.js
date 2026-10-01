// Radio de sesión: lista de reproducción que avanza sola.
// Marcado: <div class="radio"><ol><li data-src="audio/s1/archivo.mp3">…</li></ol></div>
// data-src es relativo a la raíz del sitio.
(function () {
  // Dónde viven los audios. Vacío = dentro de la propia web (docs/audio/).
  // Para un servidor externo, la URL de la carpeta que contiene s1/, s2/… (con https y / final),
  // p. ej. "https://ejemplo.com/radio/".
  var AUDIO_BASE = "https://lamembrana.com/radio-katarina/";
  function base() {
    try { return JSON.parse(document.getElementById("__config").textContent).base || "."; }
    catch (e) { return "."; }
  }
  function fmt(t) {
    if (!isFinite(t)) return "–:––";
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  function init(radio) {
    if (radio.dataset.ready) return;
    radio.dataset.ready = "1";
    var items = Array.prototype.slice.call(radio.querySelectorAll("li[data-src]"));
    if (!items.length) return;
    var root = base();
    var audio = document.createElement("audio");
    audio.preload = "none";
    var bar = document.createElement("div");
    bar.className = "radio-bar";
    bar.innerHTML =
      '<button type="button" class="radio-play" aria-label="Reproducir">▶</button>' +
      '<div class="radio-now"><span class="radio-title"></span>' +
      '<input class="radio-seek" type="range" min="0" max="1000" value="0" aria-label="Posición">' +
      '<span class="radio-time">0:00 / –:––</span></div>' +
      '<button type="button" class="radio-next" aria-label="Siguiente">⏭</button>';
    var pregunta = radio.querySelector(".radio-pregunta");
    if (pregunta) radio.insertBefore(bar, pregunta.nextSibling);
    else radio.insertBefore(bar, radio.firstChild);
    radio.appendChild(audio);
    var play = bar.querySelector(".radio-play"), next = bar.querySelector(".radio-next");
    var title = bar.querySelector(".radio-title"), seek = bar.querySelector(".radio-seek");
    var time = bar.querySelector(".radio-time");
    var cur = -1, seeking = false;

    function load(i, autoplay) {
      if (i < 0 || i >= items.length) return;
      items.forEach(function (li) { li.classList.remove("actual"); });
      cur = i;
      var li = items[i];
      li.classList.add("actual");
      title.textContent = li.textContent.trim();
      var src = li.dataset.src;
      if (/^https?:/.test(src)) audio.src = src;
      else if (AUDIO_BASE) audio.src = AUDIO_BASE + src.replace(/^audio\//, "");
      else audio.src = new URL(root + "/" + src, location.href).href;
      if (autoplay) audio.play().catch(function () {});
    }
    function advance() {
      for (var j = cur + 1; j < items.length; j++) {
        if (!items[j].classList.contains("falta")) { load(j, true); return; }
      }
      play.textContent = "▶";
    }
    items.forEach(function (li, i) {
      li.tabIndex = 0;
      li.addEventListener("click", function () { load(i, true); });
      li.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); load(i, true); } });
    });
    play.addEventListener("click", function () {
      if (cur < 0) { load(0, true); return; }
      if (audio.paused) audio.play().catch(function () {}); else audio.pause();
    });
    next.addEventListener("click", advance);
    audio.addEventListener("play", function () { play.textContent = "❚❚"; play.setAttribute("aria-label", "Pausa"); });
    audio.addEventListener("pause", function () { play.textContent = "▶"; play.setAttribute("aria-label", "Reproducir"); });
    audio.addEventListener("ended", advance);
    audio.addEventListener("error", function () {
      if (cur >= 0) { items[cur].classList.add("falta"); seek.value = 0; advance(); }
    });
    audio.addEventListener("timeupdate", function () {
      if (!seeking && audio.duration) seek.value = Math.round(1000 * audio.currentTime / audio.duration);
      time.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration);
    });
    seek.addEventListener("input", function () { seeking = true; });
    seek.addEventListener("change", function () {
      if (audio.duration) audio.currentTime = audio.duration * seek.value / 1000;
      seeking = false;
    });
    title.textContent = items[0].textContent.trim();
  }
  // En pantallas anchas, la radio vive en la columna derecha (fija al hacer scroll).
  var ancho = window.matchMedia("(min-width: 76.25em)");
  function colocar(radio) {
    var lateral = document.querySelector(".md-sidebar--secondary .md-sidebar__inner");
    if (!radio.marca) {
      radio.marca = document.createElement("p");
      radio.marca.className = "radio-aviso";
      
      radio.parentNode.insertBefore(radio.marca, radio);
      radio.marca.hidden = true;
    }
    if (ancho.matches && lateral) {
      if (radio.parentNode !== lateral) lateral.insertBefore(radio, lateral.firstChild);
      radio.classList.add("radio--lateral");
      radio.marca.hidden = true;
    } else {
      if (radio.parentNode !== radio.marca.parentNode) radio.marca.parentNode.insertBefore(radio, radio.marca.nextSibling);
      radio.classList.remove("radio--lateral");
      radio.marca.hidden = true;
    }
  }
  function all() {
    document.querySelectorAll(".radio").forEach(function (r) { init(r); colocar(r); });
  }
  if (ancho.addEventListener) ancho.addEventListener("change", function () {
    document.querySelectorAll(".radio").forEach(colocar);
  });
  if (typeof document$ !== "undefined") document$.subscribe(all);
  else document.addEventListener("DOMContentLoaded", all);
})();
