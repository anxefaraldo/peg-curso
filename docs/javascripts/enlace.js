// Enlace corto a la web, en texto (no clicable), arriba del todo en la columna izquierda.
document.addEventListener("DOMContentLoaded", function () {
  var col = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
  if (!col || col.querySelector(".enlace-corto")) return;
  var s = document.createElement("span");
  s.className = "enlace-corto";
  s.textContent = "bit.ly/anxe-peg";
  col.insertBefore(s, col.firstChild);
});

// Enlaces que se abren en una pestaña nueva: externos, archivos (PDF, audio, zip, patches)
// y guías de escucha (así la radio sigue sonando). La navegación por el curso, en la misma.
document.addEventListener("DOMContentLoaded", function () {
  var archivo = /\.(pdf|wav|aif|aiff|mp3|flac|ogg|zip|pd|txt)(\?|#|$)/i;
  document.querySelectorAll(".md-content a[href], .radio a[href]").forEach(function (a) {
    var url;
    try { url = new URL(a.getAttribute("href"), location.href); } catch (e) { return; }
    var externo = /^https?:$/.test(url.protocol) && url.host !== location.host;
    var guia = a.classList.contains("radio-guia") || /\/escuchas\//.test(url.pathname);
    if (url.protocol === "mailto:") return;
    if (externo || archivo.test(url.pathname) || guia) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });
});
