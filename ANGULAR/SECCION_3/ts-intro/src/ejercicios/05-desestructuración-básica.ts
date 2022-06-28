import { NumberLiteralType } from "typescript";
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}
//Intellisence me ofrece todas las propiedades ya
//CTRL+espacio abre Intellisence para ver las posibles propiedades
const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

// console.log('El volumen actual es de: ', reproductor.volumen);
// console.log('El segundo actual es de: ',reproductor.segundo );
// console.log('La canción actual es de: ',reproductor.cancion );
// console.log('El autor actual es: ', reproductor.detalles.autor);

//DESESTRUCTURACION
//EXTRAER DETERMINADAS PROPIEDADES DE UN OBJETO GUARDÁNDOLAS EN VARIABLES
const { volumen, segundo, cancion, detalles } = reproductor;
// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ',segundo );
// console.log('La canción actual es de: ',cancion );
//console.log('El autor actual es: ', detalles.autor);

//DESESTRUCTURAR DETALLES:
const { autor } = detalles;
// console.log('El autor actual es: ', autor);

//DESESTRUCTURAR TODO:
//const {volumen, segundo, cancion, detalles:{autor}}=reproductor;
// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ',segundo );
// console.log('La canción actual es de: ',cancion );
// console.log('La canción actual es de: ',autor );

//MODIFICAR EL NOMBRE DE UNA PROPIEDAD AL DESESTRUCTURAR
//SI NECESITAMOS CREAR UNA CONSTANTE AUTOR ENTRA EN COLISION CON LA PROPIEDAD
//const autor= 'Fulano';

//LLAMO autorDetalle A LA CONSTANTE QUE ALMACENARÁ LA PROPIEDAD autor
//const {volumen, segundo, cancion, detalles:{autor:autorDetalle}}=reproductor;



const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 1: ',dbz[0] );
console.log('Personaje 2: ',dbz[1] );
console.log('Personaje 3: ',dbz[2] );

//DESESTRUCTUTACION ARRAY
//Para desestructurar un array lo hago con []
const [p1,p2,p3]=dbz;
console.log('Personaje 1: ',p1 );
console.log('Personaje 2: ',p2 );
console.log('Personaje 3: ',p3 );
//En este caso no importa el nombre de la variable en la que almacenamos, importa solo la posición.

//Si solo necesito el personaje 3, dejo las comas en las posiciones anteriores pero sin poner nombres.
const [,,personaje3]=dbz;
console.log('Personaje 3: ',personaje3 );