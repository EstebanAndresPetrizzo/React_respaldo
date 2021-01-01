const persona ={
    nombre : 'andres',
    apellido : 'petrizzo',
    edad : 45,
    direccion:{
        city:'Varela',
        zip:42151,
        lat:14.154,
        lng:28.1215
    }
}

//console.table(persona);
console.log(persona);

const persona2 = {...persona};//clona el contenido de un obj
persona2.nombre = 'David';

console.log(persona2);
console.log(persona);