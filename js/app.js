document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-modulos");
  const busqueda = document.getElementById("busqueda-modulos");
  const filtroDocente = document.getElementById("filtro-docente");
  const botonTema = document.getElementById("cambiar-tema");
  const barraProgreso = document.getElementById("barra-progreso");
  const resumenProgreso = document.getElementById("resumen-progreso");
  const porcentajeProgreso = document.getElementById("porcentaje-progreso");
  const estadoAplicacion = document.getElementById("estado-aplicacion");
  const sinResultados = document.getElementById("sin-resultados");
  const claveAlmacenamiento = "portal-repaso-pro-v1";

  if (!contenedor || !busqueda || !filtroDocente || !botonTema || !barraProgreso ||
      !resumenProgreso || !porcentajeProgreso || !estadoAplicacion || !sinResultados) {
    console.error("No se encontraron todos los controles necesarios para el repaso.");
    return;
  }

  const idsValidos = new Set(modulosData.map(modulo => modulo.id));
  const progreso = { repasados: new Set(), quizzes: new Set(), tema: "dark" };

  function mostrarEstado(mensaje) {
    estadoAplicacion.textContent = mensaje;
  }

  function cargarProgreso() {
    try {
      const guardado = localStorage.getItem(claveAlmacenamiento);
      if (!guardado) return;

      const datos = JSON.parse(guardado);
      if (!datos || typeof datos !== "object" || Array.isArray(datos)) {
        throw new TypeError("El progreso guardado tiene un formato inválido.");
      }

      if (Array.isArray(datos.repasados)) {
        datos.repasados.filter(id => idsValidos.has(id)).forEach(id => progreso.repasados.add(id));
      }
      if (Array.isArray(datos.quizzes)) {
        const preguntasValidas = new Set(modulosData.flatMap(modulo =>
          modulo.quiz.map((pregunta, indice) => `${modulo.id}:${indice}`)
        ));
        datos.quizzes.filter(id => preguntasValidas.has(id)).forEach(id => progreso.quizzes.add(id));
      }
      if (datos.tema === "light" || datos.tema === "dark") {
        progreso.tema = datos.tema;
      }
    } catch (error) {
      console.error("No se pudo cargar el progreso del navegador.", error);
      mostrarEstado("No se pudo leer el progreso guardado; los cambios de esta sesión seguirán funcionando.");
    }
  }

  function guardarProgreso() {
    try {
      localStorage.setItem(claveAlmacenamiento, JSON.stringify({
        repasados: [...progreso.repasados],
        quizzes: [...progreso.quizzes],
        tema: progreso.tema
      }));
      return true;
    } catch (error) {
      console.error("No se pudo guardar el progreso en el navegador.", error);
      mostrarEstado("No se pudo guardar el progreso. Revisa el almacenamiento disponible en el navegador.");
      return false;
    }
  }

  function actualizarProgreso() {
    const total = progreso.repasados.size;
    const porcentaje = Math.round((total / modulosData.length) * 100);
    resumenProgreso.textContent = `${total} de ${modulosData.length} módulos repasados`;
    porcentajeProgreso.textContent = `${porcentaje}%`;
    barraProgreso.value = total;
    barraProgreso.textContent = `${total} de ${modulosData.length}`;

    contenedor.querySelectorAll(".marcar-repasado").forEach(control => {
      control.checked = progreso.repasados.has(Number(control.value));
    });
  }

  function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
  }

  function renderizarModulos() {
    contenedor.className = "grid-modulos";
    contenedor.innerHTML = modulosData.map(mod => `
      <article class="card-modulo" data-docente="${mod.tipo}">
        <span class="badge-docente badge-${mod.tipo}">
          ${mod.docente}
        </span>
        <h3>
          <button class="modulo-toggle" type="button" aria-expanded="false" aria-controls="modulo-${mod.id}-detalles">
            <span>${mod.nombre}</span>
            <span class="modulo-icono" aria-hidden="true"></span>
          </button>
        </h3>
        <p class="resumen-modulo">${mod.resumen}</p>
        <div class="detalles-modulo" id="modulo-${mod.id}-detalles" hidden>
          <label class="control-completado">
            <input class="marcar-repasado" type="checkbox" value="${mod.id}">
            <span>Marcar módulo como repasado</span>
          </label>
          <section>
            <h4>Instrumentos</h4>
            <ul>${mod.instrumentos.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section>
            <h4>Programas</h4>
            <ul>${mod.programas.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section>
            <h4>Herramientas</h4>
            <ul>${mod.herramientas.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section>
            <h4>Entregas de Classroom</h4>
            <p>${mod.evidencias}</p>
          </section>
          <section>
            <h4>Recursos</h4>
            <ul>${mod.recursos.map(recurso => `
              <li><a href="${recurso.url}" target="_blank" rel="noopener noreferrer">${recurso.titulo}</a></li>
            `).join("")}</ul>
          </section>
          <section class="quiz">
            <h4>Quiz de repaso</h4>
            ${mod.quiz.map((pregunta, indice) => `
              <form class="quiz-form" data-modulo="${mod.id}" data-pregunta="${indice}">
                <fieldset>
                  <legend>${pregunta.pregunta}</legend>
                  ${pregunta.opciones.map((opcion, opcionIndice) => `
                    <label class="opcion-quiz">
                      <input type="radio" name="modulo-${mod.id}-pregunta-${indice}" value="${opcionIndice}" required>
                      <span>${opcion}</span>
                    </label>
                  `).join("")}
                </fieldset>
                <button class="boton-secundario boton-responder" type="submit">Revisar respuesta</button>
                <p class="resultado-quiz" aria-live="polite" hidden></p>
              </form>
            `).join("")}
          </section>
        </div>
      </article>
    `).join("");

    contenedor.querySelectorAll(".quiz-form").forEach(formulario => {
      const claveQuiz = `${formulario.dataset.modulo}:${formulario.dataset.pregunta}`;
      if (!progreso.quizzes.has(claveQuiz)) return;

      const modulo = modulosData.find(item => item.id === Number(formulario.dataset.modulo));
      const pregunta = modulo.quiz[Number(formulario.dataset.pregunta)];
      const respuestaCorrecta = formulario.querySelector(`input[value="${pregunta.respuestaCorrecta}"]`);
      respuestaCorrecta.checked = true;
      formulario.querySelectorAll("input").forEach(input => {
        input.disabled = true;
      });
      formulario.querySelector(".boton-responder").disabled = true;
      const resultado = formulario.querySelector(".resultado-quiz");
      resultado.className = "resultado-quiz correcto";
      resultado.textContent = `¡Correcto! ${pregunta.explicacion}`;
      resultado.hidden = false;
    });

    actualizarProgreso();
  }

  function filtrarModulos() {
    const consulta = normalizar(busqueda.value.trim());
    const docente = filtroDocente.value;
    let visibles = 0;

    contenedor.querySelectorAll(".card-modulo").forEach((tarjeta, indice) => {
      const modulo = modulosData[indice];
      const contenido = normalizar([
        modulo.nombre,
        modulo.docente,
        modulo.resumen,
        modulo.instrumentos.join(" "),
        modulo.programas.join(" "),
        modulo.herramientas.join(" "),
        modulo.evidencias,
        modulo.recursos.map(recurso => recurso.titulo).join(" "),
        modulo.quiz.map(pregunta => [pregunta.pregunta, ...pregunta.opciones].join(" ")).join(" ")
      ].join(" "));
      const coincideTexto = !consulta || contenido.includes(consulta);
      const coincideDocente = docente === "todos" || modulo.tipo === docente;
      const mostrar = coincideTexto && coincideDocente;
      tarjeta.hidden = !mostrar;
      if (mostrar) visibles += 1;
    });

    sinResultados.hidden = visibles > 0;
  }

  function actualizarTema() {
    const temaClaro = progreso.tema === "light";
    document.body.dataset.theme = progreso.tema;
    botonTema.textContent = temaClaro ? "Usar tema oscuro" : "Usar tema claro";
    botonTema.setAttribute("aria-pressed", String(temaClaro));
  }

  cargarProgreso();
  renderizarModulos();
  actualizarTema();

  busqueda.addEventListener("input", filtrarModulos);
  filtroDocente.addEventListener("change", filtrarModulos);

  botonTema.addEventListener("click", () => {
    progreso.tema = progreso.tema === "dark" ? "light" : "dark";
    actualizarTema();
    guardarProgreso();
  });

  contenedor.addEventListener("click", event => {
    const boton = event.target.closest(".modulo-toggle");
    if (!boton || !contenedor.contains(boton)) return;

    const detalles = document.getElementById(boton.getAttribute("aria-controls"));
    const expandido = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!expandido));
    detalles.hidden = expandido;
  });

  contenedor.addEventListener("change", event => {
    if (!event.target.matches(".marcar-repasado")) return;

    const id = Number(event.target.value);
    if (event.target.checked) {
      progreso.repasados.add(id);
    } else {
      progreso.repasados.delete(id);
    }
    actualizarProgreso();
    if (guardarProgreso()) {
      mostrarEstado("Progreso guardado en este navegador.");
    }
  });

  contenedor.addEventListener("submit", event => {
    const formulario = event.target.closest(".quiz-form");
    if (!formulario) return;
    event.preventDefault();

    const moduloId = Number(formulario.dataset.modulo);
    const preguntaIndice = Number(formulario.dataset.pregunta);
    const modulo = modulosData.find(item => item.id === moduloId);
    const pregunta = modulo && modulo.quiz[preguntaIndice];
    const seleccion = new FormData(formulario).values().next().value;
    const resultado = formulario.querySelector(".resultado-quiz");
    const esCorrecta = Number(seleccion) === pregunta.respuestaCorrecta;

    resultado.className = `resultado-quiz ${esCorrecta ? "correcto" : "incorrecto"}`;
    resultado.textContent = `${esCorrecta ? "¡Correcto!" : "Todavía no. Inténtalo de nuevo."} ${pregunta.explicacion}`;
    resultado.hidden = false;

    if (esCorrecta) {
      progreso.quizzes.add(`${moduloId}:${preguntaIndice}`);
      formulario.querySelectorAll("input").forEach(input => {
        input.disabled = true;
      });
      formulario.querySelector(".boton-responder").disabled = true;
      if (guardarProgreso()) {
        mostrarEstado("¡Respuesta correcta! Resultado guardado en este navegador.");
      }
    }
  });
});
