
const saludar1 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;
const saludar3 = () => `Hola Mundo`;

console.log(saludar1('Andres 1'));
console.log(saludar2('Andres 2'));
console.log(saludar3());

//Con los parentesis retorno un obj implicito
const getUser = () => ({
    id: 1234,
    userName: 'Andres'
})

console.log(getUser());

//practica
const getUserActivo = (nombre) => ({
    id : 1234,
    userName : nombre
});

console.log(getUserActivo('Andres2'));