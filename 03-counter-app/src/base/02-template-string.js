/*const nombre = 'Andres';
const apellido = 'Petrizzo';

const nombreCompleto = `${nombre} ${apellido}`;
*/
export function getSaludo(nombre = 'Carlos'){
    return 'Hola '+ nombre + '!';
}