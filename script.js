// script.js — manejo de "curiosidades" con animación y defensas

document.addEventListener('DOMContentLoaded', () => {
  const datosTCA = [
    "Los TCA pueden presentarse en cualquier edad, no solo en adolescentes.",
    "El apoyo familiar es clave para la recuperación.",
    "No todos los TCA implican pérdida de peso.",
    "El tratamiento temprano aumenta las posibilidades de éxito.",
    "Las redes sociales pueden influir en la percepción corporal.",
    "El ejercicio extremo también puede ser un síntoma de TCA."
  ];

  let indice = 0;
  const caja = document.getElementById('dato-curioso');
  const btn = document.getElementById('btn-dato');

  if (!caja) {
    console.error('ERROR: no se encontró el elemento con id "dato-curioso". Revisa tu HTML.');
    return;
  }

  function mostrarDato() {
    // actualiza texto
    caja.textContent = datosTCA[indice];

    // efecto visual: reiniciar la animación para que pueda reproducirse repetidas veces
    caja.classList.remove('fade');
    // forzar reflow
    void caja.offsetWidth;
    caja.classList.add('fade');

    // avanzar índice (y volver a 0 cuando termina)
    indice = (indice + 1) % datosTCA.length;
  }

  // Conectar al botón si existe; si no, exponer función global para fallback inline
  if (btn) {
    btn.addEventListener('click', mostrarDato);
  } else {
    window.mostrarDato = mostrarDato; // permite usar onclick="mostrarDato()" en HTML
  }

  // Texto inicial claro
  if (!caja.textContent || caja.textContent.trim().length === 0) {
    caja.textContent = 'Haz clic en "Ver dato" para descubrir un dato interesante.';
  }
});
