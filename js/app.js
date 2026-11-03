document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-modulos");

  if (!contenedor) return;

  contenedor.className = "grid-modulos";

  contenedor.innerHTML = modulosData.map(mod => `
    <article class="card-modulo">
      <div>
        <span class="badge-docente badge-${mod.tipo}">
          ${mod.docente}
        </span>
        <h3>${mod.nombre}</h3>
        <p class="resumen-modulo">${mod.resumen}</p>
      </div>
      <div class="detalles-modulo">
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
          <h4>Recursos</h4>
          <ul>${mod.recursos.map(recurso => `
            <li><a href="${recurso.url}" target="_blank" rel="noopener noreferrer">${recurso.titulo}</a></li>
          `).join("")}</ul>
        </section>
      </div>
    </article>
  `).join("");
});