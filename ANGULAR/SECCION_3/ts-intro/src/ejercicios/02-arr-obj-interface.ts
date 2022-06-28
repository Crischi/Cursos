
/*
    ===== Código de TypeScript =====
*/

import { NumberLiteralType } from "typescript";

//let habilidadesString: string[]=['A', 'B', 'C'];
let habilidadesAny=[];
let habilidadesStringNumber=['A', 'B', 100];
let habilidadesAll: (boolean | string | number)[]=['A', 'B', 100];
habilidadesAll.push(true);

let habilidadesString: string[]=['A', 'B', 'C'];
//habilidadesString.push(100); //Daría error

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje={
    nombre:'Strider',
    hp:100,
    habilidades:['Bash','Counter','Healing'],
}

personaje.puebloNatal='Valencia';

console.table(personaje);