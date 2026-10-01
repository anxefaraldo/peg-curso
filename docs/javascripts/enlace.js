// Enlace corto a la web, arriba del todo en la columna izquierda.
document.addEventListener("DOMContentLoaded", function () {
  var col = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
  if (!col || col.querySelector(".enlace-corto")) return;
  var a = document.createElement("a");
  a.className = "enlace-corto";
  a.href = "https://bit.ly/anxe-peg";
  a.textContent = "bit.ly/anxe-peg";
  col.insertBefore(a, col.firstChild);
});
