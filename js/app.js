document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-modulos");

  if (!contenedor) return;

  contenedor.className = "grid-modulos";

  contenedor.innerHTML = modulosData.map(mod => `
    <article class="card-modulo">
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
      </div>
    </article>
  `).join("");

  contenedor.addEventListener("click", event => {
    const boton = event.target.closest(".modulo-toggle");
    if (!boton || !contenedor.contains(boton)) return;

    const detalles = document.getElementById(boton.getAttribute("aria-controls"));
    const expandido = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!expandido));
    detalles.hidden = expandido;
  });
});