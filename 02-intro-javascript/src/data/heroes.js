//exportacion normal
const heroes = [

//exportacion por default
//export default [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//una forma de exportacion

    //export const owner = ['DC','Marvel'];
    //export default heroes;

//otra forma de exportacion
const owner = ['DC','Marvel'];
export {
    heroes as default,//lo defino como default
    owner
}