// ----- precios colores y extras -----
const precioBase = 3500000;
const recargoColor = {
  "blanco": 0,
  "rojo": 400000,
  "negro": 800000
};

const preciosAdicionales = {
  "Neblineros": 80000,
  "Portaequipaje": 350000,
  "Cinturones": 50000,
  "LucesLED": 70000,
  "Camara": 100000
};

// ----- funcion para calcular y actualizar el total -----
function calcularTotal() {
  const color = document.getElementById("colorSelector").value;
  let total = precioBase + (recargoColor[color] || 0);

  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    total += preciosAdicionales[cb.value] || 0;
  });

  const totalElemento = document.getElementById("precioTotal");
  if (totalElemento) {
    totalElemento.textContent = `Precio total: $${total.toLocaleString("es-CL")}`;
  }
}

// ----- funcion para guardar y redirigir -----
function comprar() {
  const color = document.getElementById("colorSelector").value;
  const adicionales = [];

  document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
    adicionales.push(cb.value);
  });

  localStorage.setItem("color", color);
  localStorage.setItem("adicionales", JSON.stringify(adicionales));
  localStorage.setItem("precioBase", precioBase);

  window.location.href = "resumen.html";
}

// ----- esto se activa al cargar la pagina -----
document.addEventListener("DOMContentLoaded", () => {
  // Detectar cambios en el selector de color
  const colorSelector = document.getElementById("colorSelector");
  if (colorSelector) {
    colorSelector.addEventListener("change", calcularTotal);
  }

  // para detectar cambios en checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => cb.addEventListener("change", calcularTotal));

  // calcular precio inicial al cargar la página
  calcularTotal();
});
