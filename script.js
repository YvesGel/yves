function mostrarInfo(asignatura) {
  const info = {
    'FISICA 1': '6 créditos. Introducción a los fundamentos de la física clásica.',
    'FISICA CONCEPTUAL': '3 créditos. Bases conceptuales de la física para el ingreso a la carrera.',
    'MATEMATICA BASICA': '4 créditos. Álgebra y fundamentos matemáticos.',
    'RAZONAMIENTO LOGICO MATEMATICO': '3 créditos. Lógica y razonamiento formal.',
    'METODOLOGIA DEL TRABAJO INTELECTUAL UNIVERSITARIO': '2 créditos. Técnicas de estudio universitario.',
    'FISICA 2': '6 créditos. Continuación de Física 1.',
    'QUIMICA GENERAL': '5 créditos. Fundamentos de química básica.',
    'MATEMATICA 1': '5 créditos. Cálculo diferencial e integral.',
    'COMUNICACION INTEGRAL': '3 créditos. Expresión y comprensión oral/escrita.',
    'REALIDAD NACIONAL': '2 créditos. Introducción al contexto social peruano.',
    // Puedes seguir añadiendo el resto de asignaturas, créditos y descripciones.
  };
  document.getElementById('infoAsignatura').innerHTML =
    `<h3>${asignatura}</h3><p>${info[asignatura] || 'Descripción no disponible aún.'}</p>`;
}

