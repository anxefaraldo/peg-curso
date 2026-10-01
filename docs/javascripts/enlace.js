// Enlace corto a la web, en texto (no clicable), arriba del todo en la columna izquierda.
document.addEventListener("DOMContentLoaded", function () {
  var col = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
  if (!col || col.querySelector(".enlace-corto")) return;
  var s = document.createElement("span");
  s.className = "enlace-corto";
  s.textContent = "bit.ly/anxe-peg";
  col.insertBefore(s, col.firstChild);
});
