export interface Producto {
    desc: string;
    precio: number;
  }
  
  const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150,
  };
  
  const tableta: Producto = {
    desc: "iPad Air",
    precio: 350,
  };
  
  // function calculaISV(productos: Producto[]):number {
  //   let total = 0;
  //   productos.forEach(({precio}) => {
  //     //Puedo indicar que es de tipo producto aunque al ser un elemento del array productos a viene tipado.
  //     total += precio;
  //   });
  //   return total * 0.15;
  // }
  // const articulos=[telefono,tableta];
  // const isv= calculaISV(articulos);
  // console.log('ISV: ', isv);
  
  //DEVUELVO ARRAY CON DESESTRUCTURACION
  export function calculaISV(productos: Producto[]):[number, number] {
    let total = 0;
    productos.forEach(({precio}) => {
      total += precio;
    });
    return [total, total * 0.15];
  }
  
  const articulos=[telefono,tableta];
  //Desestructura para diferenciar los valores
  const [total,isv]= calculaISV(articulos);
  console.log('Total: ', total);
  console.log('ISV: ', isv);