/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección información de los jugadores hasta el momento presentados
- imprima la información de los jugadores en el formato: {nombre} "{apodo}" {apellido} (edad) - {posiicion}.

¿Cómo puedo obtener de la colección solamente los que son mediocampistas?
*/

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    let fechaNac = new Date(fechaNacimiento);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (fechaNac.getMonth() > fechaActual.getMonth() || (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
        edad--;
    }
    return edad;
}

// Definimos una clase Jugador para representar a cada jugador
class Jugador {
    constructor(nombre, apellido, apodo, fechaNacimiento, posicion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.apodo = apodo;
        this.fechaNacimiento = fechaNacimiento;
        this.posicion = posicion;
    }

    // Método para calcular la edad del jugador
    calcularEdad() {
        return calcularEdad(this.fechaNacimiento);
    }
}

// Creamos una colección de jugadores utilizando un Map
let jugadores = new Map();

// Agregamos los jugadores a la colección
jugadores.set('lucho', new Jugador('Luciano', 'Rodriguez', 'Lucho', '2003-07-16', 'delantero'));
jugadores.set('nandez', new Jugador('Nahitan', 'Nández', '', '1995-12-28', 'mediocampista'));
jugadores.set('valverde', new Jugador('Federico', 'Valverde', 'Pajarito', '1998-07-22', 'mediocampista'));

// Función para imprimir la información de los jugadores en el formato requerido
function imprimirJugadores() {
    for (let jugador of jugadores.values()) {
        console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido} (${jugador.calcularEdad()} años) - ${jugador.posicion}`);
    }
}

// Imprimimos la información de todos los jugadores
console.log("Todos los jugadores:");
imprimirJugadores();

// Filtramos los jugadores que son mediocampistas
let mediocampistas = Array.from(jugadores.values()).filter(jugador => jugador.posicion === 'mediocampista');

// Imprimimos la información de los mediocampistas
console.log("\nMediocampistas:");
for (let jugador of mediocampistas) {
    console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido} (${jugador.calcularEdad()} años) - ${jugador.posicion}`);
}