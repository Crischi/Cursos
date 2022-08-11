//DIFERENCIA CLASE/INTERFACE

/*
A nivel de transpilación las interfaces no existen en JS mientras que las clases sí
clases permiten: crear instancias + crear métodos e implementarlos
inte*/
/*
class Heroe{
  alterEgo: string;
  edad: number;
  nombreReal: string;
  //defino e implemento una funcion que devolverá un string
  imprimirNombre(){
    return this.alterEgo +  ' '+this.nombreReal;
  }; 
}

interface SuperHeroe{
  alterEgo?: string;
  edad?: number;
  nombreReal?: string;
  //defino una funcion que devolverá un string
  imprimirNombre: ()=>string; 
}

const ironman=new Heroe();
console.log(ironman);

const spiderman: SuperHeroe ={}

*/