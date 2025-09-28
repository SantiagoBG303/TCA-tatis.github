function mostrarPagina(id) {
  // Ocultar todas las secciones
  const paginas = document.querySelectorAll(".pagina");
  paginas.forEach(p => p.classList.remove("activa"));

  // Mostrar solo la seleccionada
  document.getElementById(id).classList.add("activa");
}
