/*
El director técnico siempre debe tener algún equipo de fútbol atrás.
Cuando entran por primera vez al club, se presentan al jugador que ven en la entrada.
Les dice que se llama Luciano Rodriguez pero que puede decirle Lucho.

Quieren guardar ese dato en su memoria para no preguntarle el nombre de nuevo.

Escriba un programa que:
- guarde la información del jugador (nombre, apellido, apodo) de forma conveniente.
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (notesé las comillas es parte de lo impreso).
*/
let jugador = {
    nombre: "Luciano",
    apellido: "Rodriguez",
    apodo: "Lucho"
};
console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido}`);