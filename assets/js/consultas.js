// // Función curriada para calcular el costo total
// const calcularCostoTotal = (precioPorConsulta) => (numeroDeConsultas) => 
//     precioPorConsulta * numeroDeConsultas;
  
//   // Calcular promedio de espera
//   const calcularPromedio = (tiempos) => 
//     tiempos.reduce((total, tiempo) => total + tiempo, 0) / tiempos.length;
  
//   // Función recursiva para calcular horas totales
//   const calcularHorasTotales = (horas, index = 0) => {
//     if (index >= horas.length) return 0;
//     return horas[index] + calcularHorasTotales(horas, index + 1);
//   };
  
//   // Función para aplicar descuentos
//   const aplicarDescuento = (descuento) => (costo) => 
//     costo - (costo * (descuento / 100));
  
//   // Manejar el cálculo de costo total
//   document.getElementById('btnCostoTotal').addEventListener('click', () => {
//     const precio = parseFloat(document.getElementById('precio').value);
//     const consultas = parseInt(document.getElementById('consultas').value);
  
//     if (isNaN(precio) || isNaN(consultas)) {
//       alert("Introduce valores válidos.");
//       return;
//     }
  
//     const costoTotal = calcularCostoTotal(precio)(consultas);
//     document.getElementById('resultadoCosto').textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
//   });
  
//   // Manejar el cálculo de promedio de espera
//   document.getElementById('btnPromedio').addEventListener('click', () => {
//     const tiempos = document.getElementById('tiempos').value.split(',').map(Number);
  
//     if (tiempos.some(isNaN)) {
//       alert("Introduce tiempos válidos (números separados por comas).");
//       return;
//     }
  
//     const promedio = calcularPromedio(tiempos);
//     document.getElementById('resultadoPromedio').textContent = `Promedio de Espera: ${promedio.toFixed(2)} minutos`;
//   });
  
//   // Manejar el cálculo de horas totales
//   document.getElementById('btnHorasTotales').addEventListener('click', () => {
//     const horas = document.getElementById('horas').value.split(',').map(Number);
  
//     if (horas.some(isNaN)) {
//       alert("Introduce horas válidas (números separados por comas).");
//       return;
//     }
  
//     const totalHoras = calcularHorasTotales(horas);
//     document.getElementById('resultadoHoras').textContent = `Total de Horas: ${totalHoras} horas`;
//   });
  
//   // Manejar el cálculo de costo con descuento
//   document.getElementById('btnCostoDescuento').addEventListener('click', () => {
//     const precio = parseFloat(document.getElementById('precioDescuento').value);
//     const consultas = parseInt(document.getElementById('consultasDescuento').value);
//     const descuento = parseFloat(document.getElementById('descuento').value);
  
//     if (isNaN(precio) || isNaN(consultas) || isNaN(descuento)) {
//       alert("Introduce valores válidos.");
//       return;
//     }
  
//     const costoSinDescuento = calcularCostoTotal(precio)(consultas);
//     const costoConDescuento = aplicarDescuento(descuento)(costoSinDescuento);
  
//     document.getElementById('resultadoDescuento').textContent = 
//       `Costo con Descuento: $${costoConDescuento.toFixed(2)}`;
//   });
  
// Simulación de datos
const datosAPI = {
    doctores: [
      { id: 1, nombre: "Dr. Pérez", rut:11111111-1, especialidad: "Cardiología", experiencia: 15 },
      { id: 2, nombre: "Dra. López", rut:22222222-2, especialidad: "Pediatría", experiencia: 10 },
      { id: 3, nombre: "Dr. García", rut:33333333-3, especialidad: "Cirugía", experiencia: 20 },
    ],
    citas: [],
  };
  
  // Función para simular la obtención de datos desde una API
  const obtenerDatosAPI = (endpoint) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (datosAPI[endpoint]) {
          resolve(datosAPI[endpoint]);
        } else {
          reject("Endpoint no encontrado.");
        }
      }, 1000); // Simulación de latencia
    });
  
  // Cargar la lista de doctores
  async function cargarDoctores() {
    try {
      const doctores = await obtenerDatosAPI("doctores");
      const contenedor = document.getElementById("listaDoctores");
      contenedor.innerHTML = ""; // Limpiar contenido previo
  
      doctores.forEach((doctor) => {
        const elemento = document.createElement("li");
        elemento.textContent = `${doctor.nombre} - Rut: ${doctor.rut} - Especialidad: ${doctor.especialidad}`;
        contenedor.appendChild(elemento);
      });
    } catch (error) {
      console.error("Error al cargar doctores:", error);
    }
  }
  
  // Registrar cita
  async function registrarCita(doctorId, paciente, fecha) {
    try {
      const nuevaCita = { id: Date.now(), doctorId, paciente, fecha };
      datosAPI.citas.push(nuevaCita); // Agregar a las citas
      console.log("Cita registrada:", nuevaCita);
      document.getElementById("resultadoCita").textContent = `Cita registrada para ${paciente} con el doctor ID ${doctorId} en la fecha ${fecha}.`;
    } catch (error) {
      console.error("Error al registrar cita:", error);
    }
  }
  
  // Obtener y mostrar todas las citas
  function listarCitas() {
    const citas = datosAPI.citas;
    const contenedor = document.getElementById("listaCitas");
    contenedor.innerHTML = ""; // Limpiar contenido previo
  
    citas.forEach((cita) => {
      const elemento = document.createElement("li");
      elemento.textContent = `Paciente: ${cita.paciente} - Doctor ID: ${cita.doctorId} - Fecha: ${cita.fecha}`;
      contenedor.appendChild(elemento);
    });
  }
  
  // Buscar doctores por especialidad
  function buscarPorEspecialidad() {
    const especialidad = document.getElementById("especialidad").value.toLowerCase();
    const doctoresFiltrados = datosAPI.doctores.filter(doctor =>
      doctor.especialidad.toLowerCase().includes(especialidad)
    );
  
    const contenedor = document.getElementById("resultadoBusquedaEspecialidad");
    contenedor.innerHTML = ""; // Limpiar contenido previo
  
    doctoresFiltrados.forEach((doctor) => {
      const elemento = document.createElement("li");
      elemento.textContent = `${doctor.nombre} - Especialidad: ${doctor.especialidad}`;
      contenedor.appendChild(elemento);
    });
  }
  
  // Calcular costo total de consultas
  function calcularCostoTotal() {
    const costoConsulta = parseFloat(document.getElementById("costoConsulta").value);
    const cantidadConsultas = parseInt(document.getElementById("cantidadConsultas").value);
  
    if (isNaN(costoConsulta) || isNaN(cantidadConsultas)) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }
  
    const costoTotal = costoConsulta * cantidadConsultas;
    document.getElementById("resultadoCosto").textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
  }
  
  // Evento para registrar una cita
  document.getElementById("btnRegistrarCita").addEventListener("click", () => {
    const doctorId = parseInt(document.getElementById("doctorId").value);
    const paciente = document.getElementById("paciente").value;
    const fecha = document.getElementById("fecha").value;
  
    if (!doctorId || !paciente || !fecha) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    registrarCita(doctorId, paciente, fecha);
  });
  