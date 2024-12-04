
  
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
  