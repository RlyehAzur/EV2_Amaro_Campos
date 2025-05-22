document.addEventListener("DOMContentLoaded", () => {
    const color = localStorage.getItem("color");
    const adicionales = JSON.parse(localStorage.getItem("adicionales")) || [];
    const precioBase = parseInt(localStorage.getItem("precioBase")) || 0;
  
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
  
    let total = precioBase + (recargoColor[color] || 0);
    adicionales.forEach(item => {
      total += preciosAdicionales[item] || 0;
    });
  
    // muestra el resumen
    document.getElementById("resumenColor").textContent = capitalizar(color);
    document.getElementById("resumenAdicionales").textContent =
      adicionales.length > 0 ? adicionales.join(", ") : "Ninguno";
    document.getElementById("resumenTotal").textContent = "$" + total.toLocaleString("es-CL");
  
    // botón de regreso/compra
    const btnVolver = document.getElementById("btnVolver");
    btnVolver.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "index.html";
    });
  });
  // esto hace la primera letra mayuscula (adicionales)
  function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  