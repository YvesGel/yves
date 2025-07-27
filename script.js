function mostrarInfo(asignatura) {
  let info = {
    'Matemáticas I': 'Fundamentos de cálculo, álgebra y geometría.',
    'Introducción a la Programación': 'Bases de la programación en Python y lógica computacional.'
    // Agrega más asignaturas y descripciones aquí
  };
  document.getElementById('infoAsignatura').innerHTML = `<h3>${asignatura}</h3><p>${info[asignatura] || 'Descripción no disponible.'}</p>`;
}
