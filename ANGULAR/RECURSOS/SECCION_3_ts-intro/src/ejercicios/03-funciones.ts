/*
    ===== Código de TypeScript =====
*/

//Funciones básicas
// function sumar(a, b) {
//   return a + b;
// }
// console.log("resultado_1:", sumar("Cris", "Hugo"));
// console.log("resultado_2:", sumar("Cris"));
// console.log("resultado_3:", sumar());

// function sumarNumber(a: number, b: number) {
//   return a + b;
// }
// console.log("resultado_4:", sumarNumber("Cris", "Hugo"));
// console.log("resultado_5:", sumarNumber(1, 2));

// function sumarString(a: number, b: number) {
//   return (a + b).toString();
// }
// console.log("resultado_6:", sumarString(1, 2));

// function sumarNumberExplicito(a: number, b: number): number {
//   return a + b;
// }
// console.log("resultado_7:", sumarNumberExplicito("Cris", 2));
// console.log("resultado_8:", sumarNumberExplicito(1, 2));

// const sumarFlecha = (a, b) => {
//   return a + b;
// };
// const sumarFlechaTipos = (a: number, b: number): number => {
//   return a + b;
// };

// function multiplicar(numero, otroNumero, base) {
//   return numero * base;
// }
// console.log("resultado_9:", multiplicar(10, 20));

// function multiplicarTipos(
//   numero: number,
//   otroNumero?: number,
//   base: number = 2
// ): number {
//   return numero * base;
// }
// console.log("resultado_10:", multiplicarTipos(10, 20));

//Funciones con objetos como argumento

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPuntosVida: ()=> void;
  }
  
  function curar(personaje:PersonajeLOR, curarX:number): void {
    personaje.pv += curarX;
    console.log(personaje);
  }
  
  const nuevoPersonaje: PersonajeLOR={
    nombre:'Strider',
    pv:50,
    mostrarPuntosVida(){
      console.log('Puntos de vida:', this.pv);
    }
  }
  
  curar(nuevoPersonaje, 20);
  
  