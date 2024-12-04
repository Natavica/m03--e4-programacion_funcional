# Gestión de Consultas Médicas
**Revisar: consultas.html y consultas.js**

## Descripción del Proyecto

Este proyecto está diseñado para gestionar la información relacionada con doctores, servicios médicos, pacientes y citas. A lo largo del código se emplean conceptos avanzados de **JavaScript**, como la manipulación de **JSON**, el uso de **algoritmos** y **estructuras de datos**, **programación funcional**, **asíncrona** y **orientada a objetos**.

### Datos Manipulados con JSON

Los datos de los doctores y las citas se almacenan en formato **JSON**. Esto nos permite organizar y manipular eficientemente la información dentro de la aplicación.

#### Datos de Doctores:
- **id**: Identificador único del doctor.
- **nombre**: Nombre completo del doctor.
- **especialidad**: Especialidad médica del doctor (por ejemplo, Cardiología, Pediatría, etc.).
- **experiencia**: Años de experiencia del doctor.

#### Datos de Citas:
- **id**: Identificador único de la cita.
- **doctorId**: Relacionado con el ID del doctor que atenderá la cita.
- **paciente**: Nombre del paciente que solicita la cita.
- **fecha**: Fecha en la que se llevará a cabo la cita.

Estos datos se cargan en la interfaz a través de una **simulación de API**, que recupera los datos en formato JSON de un objeto estático después de una breve espera para simular el tiempo de carga de una API real.

#### Algoritmos y Estructuras de Datos Utilizados

### Algoritmos Implementados:
**-Búsqueda:** Se implementa un algoritmo de búsqueda para filtrar doctores por especialidad. Usamos el método filter() para realizar la búsqueda.

**-Ordenamiento:** Los doctores pueden ser ordenados por años de experiencia utilizando el método sort() de JavaScript. Este algoritmo ordena a los doctores de mayor a menor experiencia.

### Estructuras de Datos Utilizadas:
**-Listas (Arrays):** Se utilizan para almacenar tanto los doctores como las citas.

**-Pilas o Colas:** Aunque no se implementa directamente en este ejemplo, podrías utilizar pilas o colas para gestionar citas de pacientes (por ejemplo, utilizando un stack o queue).

**Programación Funcional:**

La programación funcional es un paradigma que se emplea en este proyecto para realizar operaciones como currying, composición de funciones y el uso de funciones puras.

**-Currying**
-El currying es utilizado para crear funciones más específicas a partir de funciones generales. Aquí lo aplicamos para calcular el costo total de las consultas, donde primero definimos el costo por consulta y luego calculamos el costo total dependiendo de la cantidad.

**-Composición de Funciones**
-Usamos la composición de funciones para aplicar descuentos al costo de las consultas. La composición de funciones se logra al crear una función que aplica un descuento sobre el costo total calculado.

**-Programación Asíncrona**
-El proyecto utiliza promesas y async/await para manejar las operaciones asincrónicas, como la carga de los doctores desde la "API". Se utiliza una promesa para simular el tiempo de espera de una API real.

**-Manejo de Eventos**
-El proyecto utiliza event listeners para escuchar las interacciones del usuario, como el registro de citas o la búsqueda de doctores. Cada vez que el usuario hace clic en un botón o realiza una acción, se ejecutan las funciones correspondientes.


## Instrucciones para Ejecutar y Probar el Proyecto

Sigue estos pasos para ejecutar y probar el proyecto correctamente:

### 1. Descargar los Archivos
- Asegúrate de tener los archivos necesarios:
  - `index.html`: Archivo principal que contiene la estructura HTML de la interfaz.
  - `consultas.js`: Archivo que contiene toda la lógica del proyecto escrita en JavaScript.
  - Cualquier otro archivo adicional, como estilos CSS o datos JSON simulados, si es necesario.
  
### 2. Abrir en un Navegador
- Abre el archivo `index.html` en un navegador web moderno (se recomienda usar **Google Chrome** o **Mozilla Firefox** para garantizar compatibilidad).

### 3. Interacción con la Interfaz
Una vez que el proyecto esté cargado en el navegador, puedes interactuar con las siguientes funcionalidades:

#### 3.1 Cargar Doctores
- Haz clic en el botón **"Cargar Doctores"** para cargar los datos de los doctores simulados desde la API. 
- Esto mostrará una lista de doctores disponibles junto con su especialidad y experiencia.

#### 3.2 Registrar Citas
1. Completa los campos obligatorios:
   - **Doctor ID**: Ingresa el ID del doctor que atenderá la cita.
   - **Paciente**: Escribe el nombre del paciente.
   - **Fecha**: Selecciona la fecha para la cita.
2. Haz clic en el botón **"Registrar Cita"**.
3. Aparecerá un mensaje de confirmación, y la cita será añadida al registro.

#### 3.3 Buscar Doctores por Especialidad
1. Escribe el nombre de una especialidad en el campo de búsqueda.
2. Haz clic en el botón **"Buscar"**.
3. Se mostrarán los doctores que coincidan con la especialidad ingresada.

#### 3.4 Ver Todas las Citas
- Haz clic en el botón **"Ver Citas"** para listar todas las citas registradas, mostrando información del paciente, fecha y doctor asignado.

---

