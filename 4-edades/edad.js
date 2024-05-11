/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

// Función para calcular la edad a partir de la fecha de nacimiento
function edad(fechaNacimiento) {
  // Convertimos la fecha de nacimiento en un objeto Date
  let fechaNac = new Date(fechaNacimiento);
  // Obtenemos la fecha actual
  let fechaActual = new Date();
  // Calculamos la diferencia de años entre la fecha actual y la fecha de nacimiento
  let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  // Comprobamos si el cumpleaños ya pasó este año
  if (fechaNac.getMonth() > fechaActual.getMonth() || (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
      // Si no ha cumplido años este año, restamos 1 a la edad
      edad--;
  }
  // Retornamos la edad calculada
  return edad;
}

// Datos del jugador
let jugador = {
  nombre: "Luciano",
  apellido: "Rodriguez",
  apodo: "Lucho",
  fechaNacimiento: "2003-07-16" // Fecha de nacimiento en formato año-mes-día
};

// Calculamos la edad del jugador
let edadJugador = edad(jugador.fechaNacimiento);

// Imprimimos el mensaje con el nombre, apodo, apellido y edad del jugador
console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido} (${edadJugador} años)`);