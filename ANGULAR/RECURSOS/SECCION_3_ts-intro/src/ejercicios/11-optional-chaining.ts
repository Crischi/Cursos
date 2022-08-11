interface Pasajero{
    nombre:string;
    hijos?: string[];//propiedad opcional
  }
  
  const pasajero1:Pasajero ={
    nombre: 'Fernando',
  }
  
  const pasajero2:Pasajero ={
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel'],
  }
  
  function imprimeHijos( pasajero: Pasajero): void{
    const cuantosHijos= pasajero.hijos?.length || 0;
    console.log( cuantosHijos);
  }
  
  imprimeHijos(pasajero2);
  imprimeHijos(pasajero1);//Da error al ser undefined. No existe la propiedad.