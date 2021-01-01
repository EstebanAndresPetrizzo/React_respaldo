
//operado condiccinal ternario
const activo = true;
const mensaje = (activo) ? 'Activo' : 'Inactivo';
console.log(mensaje);

//opcion para evitar que js evalue el else
const mensaje2 = activo && 'Activo2';
console.log(mensaje2);