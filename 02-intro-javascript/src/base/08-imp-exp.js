import heroes, {owner} from "../data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
//console.log(getHeroeById(2));

//filter
const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroeByOwner('DC'));

console.log(owner); 
export{
    getHeroeById,
    getHeroeByOwner
}