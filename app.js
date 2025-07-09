
function generarEvaluacion() {
  const puesto = document.getElementById("nombrePuesto").value;
  const area = document.getElementById("area").value;
  const objetivo = document.getElementById("objetivo").value;
  const funciones = document.getElementById("funciones").value;
  const relaciones = document.getElementById("relaciones").value;
  const requisitos = document.getElementById("requisitos").value;

  const knowhow = parseInt(document.getElementById("knowhow").value);
  const resolucion = parseInt(document.getElementById("resolucion").value);
  const responsabilidad = parseInt(document.getElementById("responsabilidad").value);

  const puntajeTotal = knowhow + resolucion + responsabilidad;

  let nivelHAY = "";
  if (puntajeTotal < 400) nivelHAY = "Nivel 1 - Operativo";
  else if (puntajeTotal < 600) nivelHAY = "Nivel 2 - Técnico / Administrativo";
  else if (puntajeTotal < 750) nivelHAY = "Nivel 3 - Coordinación";
  else if (puntajeTotal < 900) nivelHAY = "Nivel 4 - Gerencial";
  else nivelHAY = "Nivel 5 - Dirección / Alta Gerencia";

  document.getElementById("nivelHAY").innerText = `${nivelHAY} (${puntajeTotal} pts)`;

  const descripcion = `
    <strong>Puesto:</strong> ${puesto}<br>
    <strong>Área:</strong> ${area}<br>
    <strong>Objetivo:</strong> ${objetivo}<br><br>
    <strong>Funciones principales:</strong> ${funciones}<br><br>
    <strong>Relaciones clave:</strong> ${relaciones}<br><br>
    <strong>Requisitos:</strong> ${requisitos}<br><br>
    <strong>Puntaje HAY:</strong> Know-How (${knowhow}) + Resolución (${resolucion}) + Responsabilidad (${responsabilidad}) = <strong>${puntajeTotal}</strong> puntos.<br>
  `;

  document.getElementById("descripcionCompleta").innerHTML = descripcion;
  document.getElementById("resultado").style.display = "block";
}

function guardarEvaluacion() {
  const evaluacion = document.getElementById("descripcionCompleta").innerHTML;
  localStorage.setItem("ultimaEvaluacion", evaluacion);
  alert("Evaluación guardada en el navegador.");
}

function exportarPDF() {
  const resultado = document.getElementById("resultado");
  html2pdf().from(resultado).save("EvaluacionPuesto.pdf");
}
