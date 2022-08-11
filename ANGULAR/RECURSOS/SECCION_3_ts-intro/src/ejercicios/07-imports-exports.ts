import { calculaISV, Producto } from "./06-desestructuracion-funcion";

/*
Creamos un array de elementos de tipo producto.
const carritoCompras: Producto[] = [];

Inicialmente nos dará error ya que no tenemos definido "Producto"
Tenemos la interface ya creada en otro archivo, y tendremos que importarla.

Exportamos la interfaz desde el archivo donde se encuentra
  export interface Producto {
    desc: string;
    precio: number;
  }

Añadimos import en este archivo.
*/


//Creamos el array de elementos de tipo producto. Ahora sí reconoce el tipo.
const carritoCompras: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 100
  },
  {
    desc: 'Telefono 2',
    precio: 150
  },

];

//TAREA EXPORTAR FUNCION 
const [total,isv]= calculaISV(carritoCompras);
  console.log('Total: ', total);
  console.log('ISV: ', isv);

  /*
  Añado el export en el archivo de origen de la función
  Situo el cursor sobre el error en calculaISV y pulso ctr+. 
  Propone "actualizar" la importación y añade calculaISV al import
  */
