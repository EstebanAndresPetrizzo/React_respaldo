//Desestructuracion

const persona = {
    nombre:'Andres',
    edad:45,
    clave:'blakis' 
};
const persona2 = {
    nombre:'David',
    edad:88,
    clave:'blakis',
    rango:'comandante'
};

const {nombre} = persona;//extarigo el nombre del objeto

console.log(nombre);
//extarigo el nombre del objeto y lo renombro porque ya existe
const {nombre:nombre2} = persona; 
console.log(nombre2+' el nombre 2');

//extarigo mas de un campo, el orden no importa
const {nombre : nombre3, clave, edad} = persona;
console.log(`${nombre3} ${edad} ${clave}`);

//Desestructuracion en funciones
const retonarDatos = (usuario) =>{
    const {nombre : nombre3, clave, edad} = usuario;
    console.log(`${nombre3} ${edad} ${clave}`);
}

retonarDatos(persona);

//Desestructuracion en argunmentos de Funciones
const retonarDatos2 = ({nombre, edad}) =>{
    console.log(`${nombre3} ${edad}`);
}
retonarDatos2(persona);

//Desestructuracion en argunmentos de Funciones
//con parametros por defectos
const retonarDatos3 = ({nombre, edad, rango = 'Asistente'}) =>{
    console.log(nombre,edad,rango);
    //si el rango no viene utiliza el definido en el argunmento
}
retonarDatos3(persona);
retonarDatos3(persona2);

//practica
//extrayendo constantes de objetos y asignarlos a constantes
const retonarDatos4 = ({nombre, edad, rango = 'Asistente'}) =>{
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:12.214,
            lng:14.3521
        }
    }

}

//const practica = retonarDatos4(persona);
const {nombreClave,anios,latlng:{lat,lng}} = retonarDatos4(persona);
console.log(nombreClave,anios,lat,lng);