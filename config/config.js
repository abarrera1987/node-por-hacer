const colors = require("colors/safe");

const descripcion = {

    demand: true,
    alias: 'd',
    desc: colors.red('Descripción de la tarea obligatoria')

};

const completado = {

    default: true,
    alias: 'c',
    desc: colors.red("Ingrese un true si completo la tarea o un false si aun no ha terminado")
}

const argv = require('yargs')
    .command('crear', colors.magenta("Comando que se encarga de crear una tarea"), { descripcion })
    .command('actualizar', colors.magenta("Comando que se encarga de actualizar una tarea"), {
        descripcion,
        completado

    })
    .command('eliminar', colors.magenta("Comando que se encarga de eliminar una tarea"), { descripcion })
    .help()
    .argv;

module.exports = {

    argv

}