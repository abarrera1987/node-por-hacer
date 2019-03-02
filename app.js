// const argv = require("yargs").argv;

const argv = require('./config/config').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require("colors/safe");

let comando = argv._[0];

switch (comando) {

    case "crear":

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":

        let listado = porHacer.getListado();

        for (let tarea of listado) {

            console.log(colors.green("========== Listado de Tareas ============"));
            console.log(colors.green(tarea.descripcion));
            console.log(colors.green(`Estado de la tarea: ${tarea.completado}`));
            console.log(colors.green("========================================="));

        }
        break;

    case "actualizar":
        let actualizo = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizo);
        break;

    case "eliminar":
        let elimino = porHacer.eliminar(argv.descripcion);
        console.log(elimino)
        break;

    default:
        console.log("Comando no es reconocido ");

}