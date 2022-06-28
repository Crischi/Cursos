//CONSTRUCTOR
// class Heroe {
//   alterEgo: string;
//   edad: number;
//   nombreReal: string;

//   constructor(alterEgo:string){
//     this.alterEgo=alterEgo;
//   }
// }

// const ironman = new Heroe('Ironman');
// console.log(ironman);

//USO HABITUAL EN TYPESCRIPT
// class Heroe {
//   constructor(
//     public alterEgo: string,
//     public edad: number,
//     public nombreReal: string
//   ) {}
// }

// const ironman = new Heroe("Ironman", 40, "Felipe");
// console.log(ironman);

//EXTENDER CLASE Heroe con PersonaNormal.


class PersonaNormal {
    constructor(
      public nombre: string,
      public direccion: string) 
      {}
  }
  class Heroe extends PersonaNormal {
  
    constructor(
      public alterEgo: string,
      public edad: number,
      public nombreReal: string
    ) {
      super(nombreReal, 'New York, USA');
    }
  }
  
  const ironman = new Heroe("Ironman", 40, "Felipe");
  console.log(ironman);